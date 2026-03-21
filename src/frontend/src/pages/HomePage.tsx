import {
  CheckCircle,
  ChevronRight,
  ClipboardList,
  Eye,
  Flame,
  Layers,
  Play,
  Search,
  Trophy,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { Flashcard, Question } from "../backend";

export type HomeNavTarget =
  | "quiz"
  | "flashcards"
  | "videos"
  | "progress"
  | "visual"
  | "scenarios"
  | "bookmarks"
  | "daily"
  | "quick"
  | "prepVideo";

interface HomePageProps {
  questions: Question[];
  flashcards: Flashcard[];
  streak: number;
  dailyCompleted: boolean;
  onNavigate: (page: HomeNavTarget) => void;
}

const STUDY_STEPS: {
  label: string;
  description: string;
  page: HomeNavTarget;
  completedKey?: string;
  Icon: React.FC<{ size?: number; className?: string }>;
}[] = [
  {
    label: "Watch Prep Video",
    description: "Start here with the training demonstration",
    page: "prepVideo",
    completedKey: "vet_prep_video_completed",
    Icon: Video,
  },
  {
    label: "Flashcards",
    description: "Review key terms and concepts",
    page: "flashcards",
    Icon: Layers,
  },
  {
    label: "Visual Instrument Training",
    description: "Identify veterinary instruments",
    page: "visual",
    Icon: Eye,
  },
  {
    label: "Practice Quizzes",
    description: "Test your knowledge with practice questions",
    page: "quiz",
    Icon: ClipboardList,
  },
  {
    label: "Certification Practice Exam",
    description: "Full exam simulation to test readiness",
    page: "quiz",
    Icon: Play,
  },
];

export default function HomePage({
  questions,
  flashcards,
  streak,
  dailyCompleted,
  onNavigate,
}: HomePageProps) {
  const [search, setSearch] = useState("");

  const searchResults =
    search.trim().length > 1
      ? [
          ...questions
            .filter((q) => q.text.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 5)
            .map((q) => ({
              type: "Question" as const,
              text: q.text,
              category: q.category,
            })),
          ...flashcards
            .filter((f) => f.term.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 5)
            .map((f) => ({
              type: "Flashcard" as const,
              text: f.term,
              category: f.category,
            })),
        ]
      : [];

  return (
    <div className="paw-bg flex flex-col gap-5 pb-4">
      <div className="flex items-center gap-3">
        <img
          src="/assets/generated/vet-logo-transparent.dim_200x200.png"
          alt="Vet Assistant Exam Prep logo"
          className="w-12 h-12 object-contain"
        />
        <div>
          <h1 className="text-lg font-extrabold text-gray-800 leading-tight">
            Vet Assistant
          </h1>
          <p className="text-xs text-teal-600 font-semibold">Exam Prep</p>
        </div>
        {streak > 0 && (
          <div className="ml-auto flex items-center gap-1 bg-orange-50 text-orange-500 px-3 py-1.5 rounded-full">
            <Flame size={14} />
            <span className="text-sm font-bold">{streak}</span>
          </div>
        )}
      </div>

      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          data-ocid="home.search_input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions and flashcards..."
          className="w-full pl-9 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-teal-400"
        />
      </div>

      {searchResults.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {searchResults.map((r, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: positional list
              key={i}
              className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 last:border-0"
            >
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  r.type === "Question"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-purple-50 text-purple-600"
                }`}
              >
                {r.type}
              </span>
              <p className="text-sm text-gray-700 flex-1 truncate">{r.text}</p>
            </div>
          ))}
        </div>
      )}
      {search.trim().length > 1 && searchResults.length === 0 && (
        <p className="text-sm text-gray-400 text-center">No results found</p>
      )}

      <button
        type="button"
        data-ocid="home.daily_challenge_button"
        onClick={() => onNavigate("daily")}
        className="w-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-5 text-left relative overflow-hidden shadow-md"
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
          <Trophy size={60} />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <Trophy size={16} className="text-yellow-300" />
          <span className="text-xs font-semibold text-teal-100 uppercase tracking-wider">
            Daily Challenge
          </span>
        </div>
        <p className="text-white font-bold text-lg">
          {dailyCompleted ? "Challenge Complete! \u2713" : "10 Questions Today"}
        </p>
        <p className="text-teal-100 text-sm mt-1">
          {dailyCompleted
            ? "Come back tomorrow for a new challenge"
            : "Test your knowledge across all topics"}
        </p>
        <div className="flex items-center gap-1 mt-3">
          <span className="text-white text-sm font-semibold">
            {dailyCompleted ? "See results" : "Start now"}
          </span>
          <ChevronRight size={16} className="text-white" />
        </div>
      </button>

      <button
        type="button"
        data-ocid="home.quick_study_button"
        onClick={() => onNavigate("quick")}
        className="w-full bg-white border-2 border-yellow-400 rounded-3xl p-4 text-left flex items-center gap-4 shadow-sm"
      >
        <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Zap size={22} className="text-yellow-500" />
        </div>
        <div>
          <p className="font-bold text-gray-800">Quick Study Mode</p>
          <p className="text-sm text-gray-500">5-minute timed review session</p>
        </div>
        <ChevronRight size={18} className="text-gray-300 ml-auto" />
      </button>

      {/* Recommended Study Flow */}
      <div>
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
          Recommended Study Flow
        </h2>
        <div className="flex flex-col gap-2">
          {STUDY_STEPS.map((step, idx) => {
            const done = step.completedKey
              ? localStorage.getItem(step.completedKey) === "true"
              : false;
            const ocid = `home.study_flow.step.${idx + 1}` as const;

            return (
              <button
                type="button"
                key={`${step.page}-${idx}`}
                data-ocid={ocid}
                onClick={() => onNavigate(step.page)}
                className="w-full bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform"
              >
                {/* Step badge */}
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm truncate">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {step.description}
                  </p>
                </div>
                {/* Completed badge or chevron */}
                {done ? (
                  <CheckCircle
                    size={20}
                    className="text-green-500 flex-shrink-0"
                  />
                ) : (
                  <ChevronRight
                    size={18}
                    className="text-gray-300 flex-shrink-0"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
