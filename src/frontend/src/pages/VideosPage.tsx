import { ArrowLeft, BookOpen, CheckCircle, PlayCircle } from "lucide-react";
import { useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";
import { videoData } from "../data/videoData";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface VideosPageProps {
  videoQuestions: Record<string, Question[]>;
}

export default function VideosPage({ videoQuestions }: VideosPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [watched, setWatched] = useLocalStorage<string[]>(
    "vet_watched_videos",
    [],
  );

  const video = videoData.find((v) => v.youtubeId === selectedVideo);
  const questions = selectedVideo ? videoQuestions[selectedVideo] || [] : [];

  const startQuiz = () => {
    setQuizIdx(0);
    setQuizSelected(null);
    setQuizScore(0);
    setQuizDone(false);
    setQuizMode(true);
  };

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

  const markWatched = (id: string) => {
    if (!watched.includes(id)) setWatched((w) => [...w, id]);
  };

  if (!selectedVideo) {
    return (
      <div className="flex flex-col gap-3">
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
              {watched.includes(v.youtubeId) ? (
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
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                  {v.duration}
                </span>
                {videoQuestions[v.youtubeId]?.length > 0 && (
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                    {videoQuestions[v.youtubeId].length} quiz Qs
                  </span>
                )}
                {watched.includes(v.youtubeId) && (
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                    Watched
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  if (quizMode) {
    if (quizDone) {
      return (
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => {
              setQuizMode(false);
            }}
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
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
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

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setSelectedVideo(null)}
        className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
      >
        <ArrowLeft size={16} /> All Videos
      </button>

      <h2 className="text-lg font-extrabold text-gray-800">{video.title}</h2>

      {/* YouTube embed */}
      <div
        className="rounded-2xl overflow-hidden shadow-md bg-black"
        style={{ paddingTop: "56.25%", position: "relative" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allowFullScreen
          onLoad={() => markWatched(video.youtubeId)}
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

      {video.objectives.length > 0 && (
        <div className="bg-teal-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-teal-600" />
            <p className="text-sm font-semibold text-teal-700">
              Learning Objectives
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {video.objectives.map((obj, i) => (
              <li
                // biome-ignore lint/suspicious/noArrayIndexKey: positional list
                key={i}
                className="flex items-start gap-2 text-sm text-teal-800"
              >
                <span className="text-teal-500 flex-shrink-0 mt-0.5">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}

      {questions.length > 0 && (
        <button
          type="button"
          onClick={startQuiz}
          className="w-full py-4 bg-teal-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2"
        >
          <ClipboardList /> Take Quiz ({questions.length} questions)
        </button>
      )}
    </div>
  );
}

function ClipboardList() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}
