import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  PlayCircle,
  RotateCcw,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";
import { videoData } from "../data/videoData";
import { type VideoQuiz, videoQuizData } from "../data/videoQuizData";
import { useLocalStorage } from "../hooks/useLocalStorage";

const COMPLETIONS_KEY = "vet_video_completions";

interface VideosPageProps {
  videoQuestions: Record<string, Question[]>;
}

function videoQuizToQuestion(vq: VideoQuiz, index: number): Question {
  return {
    id: BigInt(9000 + index),
    text: vq.question,
    options: vq.options,
    correctIndex: BigInt(vq.correctIndex),
    explanation: vq.explanation,
    category: "video_quiz",
    difficulty: "medium",
  } as unknown as Question;
}

export default function VideosPage({ videoQuestions }: VideosPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [_watched, setWatched] = useLocalStorage<string[]>(
    "vet_watched_videos",
    [],
  );
  const [completions, setCompletions] = useLocalStorage<string[]>(
    COMPLETIONS_KEY,
    [],
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const video = videoData.find((v) => v.youtubeId === selectedVideo);

  // Build questions array: prefer local videoQuizData, fallback to backend
  const localQuiz = selectedVideo
    ? (videoQuizData[selectedVideo] ?? null)
    : null;
  const questions: Question[] = localQuiz
    ? localQuiz.map((vq, i) => videoQuizToQuestion(vq, i))
    : selectedVideo
      ? videoQuestions[selectedVideo] || []
      : [];

  const markCompleted = useCallback(
    (id: string) => {
      setCompletions((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setWatched((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    [setCompletions, setWatched],
  );

  // YouTube 80% watch tracking
  useEffect(() => {
    if (!selectedVideo) return;
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "onStateChange" && data.info === 0) {
          markCompleted(selectedVideo);
        }
        if (
          data.event === "infoDelivery" &&
          data.info?.currentTime != null &&
          data.info?.duration != null &&
          data.info.duration > 0
        ) {
          const progress = data.info.currentTime / data.info.duration;
          if (progress >= 0.8) {
            markCompleted(selectedVideo);
          }
        }
      } catch {
        // ignore non-JSON
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [selectedVideo, markCompleted]);

  const startQuiz = useCallback(() => {
    setQuizIdx(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setQuizMode(true);
  }, []);

  const handleSelect = (i: number) => {
    setQuizSelected(i);
    if (questions[quizIdx] && i === Number(questions[quizIdx].correctIndex)) {
      setQuizScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (quizIdx + 1 >= questions.length) {
      setQuizDone(true);
    } else {
      setQuizIdx((i) => i + 1);
      setQuizSelected(null);
    }
  };

  // --- List view ---
  if (!selectedVideo) {
    return (
      <div className="paw-bg flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">Video Learning</h2>
        <p className="text-sm text-gray-500">
          Watch and learn, then test your knowledge
        </p>
        {videoData.map((v, i) => (
          <button
            type="button"
            key={v.youtubeId}
            data-ocid={`video.item.${i + 1}`}
            onClick={() => setSelectedVideo(v.youtubeId)}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-left flex items-start gap-4 active:scale-[0.98] transition-transform"
          >
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              {completions.includes(v.youtubeId) ? (
                <CheckCircle size={24} className="text-green-500" />
              ) : (
                <PlayCircle size={24} className="text-red-500" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">{v.title}</p>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {v.summary}
              </p>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                  {v.duration}
                </span>
                {(videoQuizData[v.youtubeId] ?? videoQuestions[v.youtubeId])
                  ?.length > 0 && (
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                    {
                      (
                        videoQuizData[v.youtubeId] ??
                        videoQuestions[v.youtubeId]
                      ).length
                    }{" "}
                    quiz Qs
                  </span>
                )}
                {completions.includes(v.youtubeId) && (
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                    Completed
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  // --- Quiz mode ---
  if (quizMode) {
    if (quizDone) {
      return (
        <div className="paw-bg flex flex-col gap-4">
          <button
            type="button"
            data-ocid="video.quiz_back_button"
            onClick={() => setQuizMode(false)}
            className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
          >
            <ArrowLeft size={16} /> Back to Video
          </button>
          <ScoreScreen
            score={quizScore}
            total={questions.length}
            onRetry={startQuiz}
            onBack={() => setQuizMode(false)}
            backLabel="Back to Video"
          />
        </div>
      );
    }
    return (
      <div className="paw-bg flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="video.quiz_back_button"
            onClick={() => setQuizMode(false)}
            className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-sm text-gray-500">
            {quizIdx + 1}/{questions.length}
          </span>
        </div>
        {questions[quizIdx] && (
          <QuestionCard
            question={questions[quizIdx]}
            selectedIndex={quizSelected}
            onSelect={handleSelect}
            onNext={handleNext}
            nextLabel={quizIdx + 1 >= questions.length ? "See Results" : "Next"}
          />
        )}
      </div>
    );
  }

  if (!video) return null;

  const isCompleted = completions.includes(video.youtubeId);
  const hasQuiz = questions.length > 0;

  // --- Video detail view ---
  return (
    <div className="paw-bg flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          data-ocid="video.back_button"
          onClick={() => setSelectedVideo(null)}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> All Videos
        </button>
        {isCompleted && (
          <div
            data-ocid="video.completed_state"
            className="ml-auto flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold"
          >
            <CheckCircle size={13} />
            Completed
          </div>
        )}
      </div>

      <h2 className="text-lg font-extrabold text-gray-800">{video.title}</h2>

      {/* YouTube embed with JS API for progress tracking */}
      <div
        className="rounded-2xl overflow-hidden shadow-md bg-black"
        style={{ paddingTop: "56.25%", position: "relative" }}
      >
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&rel=0&modestbranding=1`}
          title={video.title}
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-700">{video.summary}</p>
      </div>

      {video.keyTakeaways.length > 0 && (
        <div className="bg-teal-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-teal-600" />
            <p className="text-sm font-semibold text-teal-700">Key Takeaways</p>
          </div>
          <ul className="flex flex-col gap-2">
            {video.keyTakeaways.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-teal-800"
              >
                <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasQuiz && (
        <button
          type="button"
          data-ocid="video.quiz_button"
          onClick={startQuiz}
          className="w-full py-4 bg-teal-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <RotateCcw size={16} />
          {isCompleted
            ? "Retake Quiz"
            : `Take Quiz (${questions.length} questions)`}
        </button>
      )}
    </div>
  );
}
