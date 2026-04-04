import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  List,
  PlayCircle,
  RotateCcw,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";
import VideoPlayer from "../components/VideoPlayer";
import { videoLessons } from "../data/videoData";
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

// Quiz is only available for individual videos (not playlists) that have quiz data
function getQuizKey(lesson: { type: string; videoId?: string }): string | null {
  if (lesson.type !== "video" || !lesson.videoId) return null;
  return lesson.videoId;
}

export default function VideosPage({ videoQuestions }: VideosPageProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
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

  const lesson = videoLessons.find((v) => v.id === selectedId) ?? null;
  const quizKey = lesson ? getQuizKey(lesson) : null;

  const localQuiz = quizKey ? (videoQuizData[quizKey] ?? null) : null;
  const questions: Question[] = localQuiz
    ? localQuiz.map((vq, i) => videoQuizToQuestion(vq, i))
    : quizKey
      ? videoQuestions[quizKey] || []
      : [];

  const completionKey =
    lesson?.type === "video"
      ? (lesson.videoId ?? null)
      : `playlist_${lesson?.id}`;

  const markCompleted = useCallback(
    (key: string) => {
      setCompletions((prev) => (prev.includes(key) ? prev : [...prev, key]));
      setWatched((prev) => (prev.includes(key) ? prev : [...prev, key]));
    },
    [setCompletions, setWatched],
  );

  // YouTube 80% watch tracking (video only)
  useEffect(() => {
    if (!lesson || lesson.type !== "video" || !lesson.videoId) return;
    const vid = lesson.videoId;
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "onStateChange" && data.info === 0) {
          markCompleted(vid);
        }
        if (
          data.event === "infoDelivery" &&
          data.info?.currentTime != null &&
          data.info?.duration != null &&
          data.info.duration > 0
        ) {
          const progress = data.info.currentTime / data.info.duration;
          if (progress >= 0.8) markCompleted(vid);
        }
      } catch {
        // ignore non-JSON
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [lesson, markCompleted]);

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
  if (selectedId === null) {
    return (
      <div className="paw-bg flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">Video Learning</h2>
        <p className="text-sm text-gray-500">
          Watch and learn, then test your knowledge
        </p>
        {videoLessons.map((v, i) => {
          const key =
            v.type === "video" ? (v.videoId ?? `pl_${v.id}`) : `pl_${v.id}`;
          const isCompleted = completions.includes(key);
          const isPlaylist = v.type === "playlist";
          return (
            <button
              type="button"
              key={v.id}
              data-ocid={`video.item.${i + 1}`}
              onClick={() => setSelectedId(v.id)}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-left flex items-start gap-4 active:scale-[0.98] transition-transform"
            >
              {/* Thumbnail or playlist icon */}
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200 relative">
                {isPlaylist ? (
                  <div className="w-full h-full bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center">
                    <List size={22} className="text-white" />
                  </div>
                ) : v.thumbnail ? (
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900" />
                )}
                {isCompleted ? (
                  <div className="absolute inset-0 bg-green-500/70 flex items-center justify-center">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                ) : !isPlaylist ? (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <PlayCircle size={18} className="text-white" />
                  </div>
                ) : null}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm">{v.title}</p>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {v.summary}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  {isPlaylist && (
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full font-medium">
                      Playlist
                    </span>
                  )}
                  {v.duration && (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {v.duration}
                    </span>
                  )}
                  {v.type === "video" &&
                    v.videoId &&
                    (videoQuizData[v.videoId] ?? videoQuestions[v.videoId])
                      ?.length > 0 && (
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        {
                          (
                            videoQuizData[v.videoId!] ??
                            videoQuestions[v.videoId!]
                          ).length
                        }{" "}
                        quiz Qs
                      </span>
                    )}
                  {isCompleted && (
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                      Completed
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
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

  if (!lesson) return null;

  const isCompleted = completionKey
    ? completions.includes(completionKey)
    : false;
  const hasQuiz = questions.length > 0;

  // --- Video / Playlist detail view ---
  return (
    <div className="paw-bg flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          data-ocid="video.back_button"
          onClick={() => {
            setSelectedId(null);
            setQuizMode(false);
          }}
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

      <div className="flex items-center gap-2">
        {lesson.type === "playlist" && (
          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-semibold">
            Playlist
          </span>
        )}
        <h2 className="text-lg font-extrabold text-gray-800">{lesson.title}</h2>
      </div>

      {/* VideoPlayer handles embed, thumbnail/playlist cover, and fallback */}
      <VideoPlayer key={lesson.id} lesson={lesson} />

      {lesson.summary && (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-700">{lesson.summary}</p>
        </div>
      )}

      {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
        <div className="bg-teal-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-teal-600" />
            <p className="text-sm font-semibold text-teal-700">Key Takeaways</p>
          </div>
          <ul className="flex flex-col gap-2">
            {lesson.keyTakeaways.map((item, i) => (
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
