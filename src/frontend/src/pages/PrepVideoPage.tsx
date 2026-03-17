import { CheckCircle, ChevronLeft, Play, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";
import { prepVideoQuestions } from "../data/prepVideoQuestions";

interface PrepVideoPageProps {
  onBack: () => void;
}

const VIDEO_ID = "6hiTz_5enxw";
const COMPLETED_KEY = "vet_prep_video_completed";

const KEY_SKILLS = [
  "Veterinary assistant responsibilities in a clinical setting",
  "Animal handling basics for common patient types",
  "Clinic workflow from patient check-in to discharge",
  "Safety practices and infection control",
];

function toQuestion(pq: (typeof prepVideoQuestions)[0]): Question {
  return {
    id: pq.id,
    text: pq.text,
    options: pq.options,
    correctIndex: BigInt(pq.correctIndex),
    explanation: pq.explanation,
    category: pq.category,
    difficulty: "medium",
  } as unknown as Question;
}

export default function PrepVideoPage({ onBack }: PrepVideoPageProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isCompleted, setIsCompleted] = useState(
    () => localStorage.getItem(COMPLETED_KEY) === "true",
  );
  const [videoEnded, setVideoEnded] = useState(false);

  // Quiz state
  const [quizMode, setQuizMode] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const startQuiz = useCallback(() => {
    setQuizIdx(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setQuizMode(true);
  }, []);

  // Auto-start quiz when video ends
  useEffect(() => {
    if (videoEnded) {
      startQuiz();
    }
  }, [videoEnded, startQuiz]);

  // YouTube postMessage listener
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;

        // State change: 0 = ended
        if (data.event === "onStateChange" && data.info === 0) {
          setVideoEnded(true);
        }

        // Progress tracking via infoDelivery
        if (
          data.event === "infoDelivery" &&
          data.info &&
          data.info.currentTime != null &&
          data.info.duration != null &&
          data.info.duration > 0
        ) {
          const progress = data.info.currentTime / data.info.duration;
          if (progress >= 0.8) {
            localStorage.setItem(COMPLETED_KEY, "true");
            setIsCompleted(true);
          }
        }
      } catch {
        // non-JSON messages from other sources — ignore
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const handleSelect = (i: number) => {
    setQuizSelected(i);
    if (i === prepVideoQuestions[quizIdx].correctIndex) {
      setQuizScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (quizIdx + 1 >= prepVideoQuestions.length) {
      setQuizDone(true);
    } else {
      setQuizIdx((idx) => idx + 1);
      setQuizSelected(null);
    }
  };

  const handleBackFromQuiz = () => {
    setQuizMode(false);
    setVideoEnded(false);
  };

  if (quizMode) {
    return (
      <div className="flex flex-col gap-4 pb-4">
        <button
          type="button"
          data-ocid="prep_video.quiz_back_button"
          onClick={handleBackFromQuiz}
          className="flex items-center gap-2 text-sm font-semibold text-teal-600 w-fit"
        >
          <ChevronLeft size={18} />
          Back to Video
        </button>

        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-lg">Post-Video Quiz</h2>
          <span className="text-sm text-gray-400">
            {quizDone ? prepVideoQuestions.length : quizIdx + 1} /{" "}
            {prepVideoQuestions.length}
          </span>
        </div>

        {quizDone ? (
          <ScoreScreen
            score={quizScore}
            total={prepVideoQuestions.length}
            onRetry={startQuiz}
            onBack={handleBackFromQuiz}
            backLabel="Back to Video"
          />
        ) : (
          <QuestionCard
            question={toQuestion(prepVideoQuestions[quizIdx])}
            questionNumber={quizIdx + 1}
            totalQuestions={prepVideoQuestions.length}
            selectedIndex={quizSelected}
            onSelect={handleSelect}
            onNext={handleNext}
            showNext={true}
            nextLabel={
              quizIdx + 1 === prepVideoQuestions.length
                ? "See Results"
                : "Next Question"
            }
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 pb-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          data-ocid="prep_video.back_button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-teal-600"
        >
          <ChevronLeft size={18} />
          Study Flow
        </button>
        {isCompleted && (
          <div
            data-ocid="prep_video.completed_state"
            className="ml-auto flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold"
          >
            <CheckCircle size={13} />
            Completed
          </div>
        )}
      </div>

      <div>
        <h1 className="text-xl font-extrabold text-gray-800">
          Watch Before Testing
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Watch the training demonstration to prepare for quizzes and the
          certification exam.
        </p>
      </div>

      {/* YouTube Embed */}
      <div className="rounded-2xl overflow-hidden shadow-md bg-black aspect-video">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&rel=0&modestbranding=1`}
          title="Veterinary Assistant Training Video"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 0 }}
        />
      </div>

      {/* Key Skills */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center">
            <Play size={14} className="text-teal-600" />
          </div>
          <h2 className="font-bold text-gray-800">
            Key Skills From This Video
          </h2>
        </div>
        <ul className="flex flex-col gap-2">
          {KEY_SKILLS.map((skill) => (
            <li
              key={skill}
              className="flex items-start gap-2.5 text-sm text-gray-700"
            >
              <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                {KEY_SKILLS.indexOf(skill) + 1}
              </span>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Retake Quiz */}
      <button
        type="button"
        data-ocid="prep_video.retake_quiz_button"
        onClick={startQuiz}
        className="w-full flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold text-sm shadow-sm transition-colors"
      >
        <RotateCcw size={16} />
        {isCompleted ? "Retake Quiz" : "Take Post-Video Quiz"}
      </button>
    </div>
  );
}
