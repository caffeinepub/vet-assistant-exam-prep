import { ArrowLeft, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { buildQuiz } from "../utils/quizUtils";

interface DailyChallengePageProps {
  questions: Question[];
  onBack: () => void;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function DailyChallengePage({
  questions,
  onBack,
}: DailyChallengePageProps) {
  const [daily, setDaily] = useLocalStorage<{
    date: string;
    score: number;
    total: number;
    completed: boolean;
  } | null>("vet_daily_challenge", null);
  const [streak, setStreak] = useLocalStorage<{
    lastDate: string;
    count: number;
  }>("vet_streak", { lastDate: "", count: 0 });
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const alreadyDone = daily?.date === today() && daily.completed;

  useEffect(() => {
    if (!alreadyDone) {
      // buildQuiz shuffles pool + shuffles each question's choices
      setQuizQuestions(buildQuiz(questions, 10));
    }
  }, [questions, alreadyDone]);

  const handleSelect = (i: number) => {
    setSelected(i);
    if (quizQuestions[idx] && i === Number(quizQuestions[idx].correctIndex)) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= quizQuestions.length) {
      setDaily({
        date: today(),
        score,
        total: quizQuestions.length,
        completed: true,
      });
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().slice(0, 10);
      if (streak.lastDate === today()) {
        // already counted
      } else if (streak.lastDate === yStr) {
        setStreak({ lastDate: today(), count: streak.count + 1 });
      } else {
        setStreak({ lastDate: today(), count: 1 });
      }
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  if (alreadyDone || done) {
    const s = done ? score : daily!.score;
    const t = done ? quizQuestions.length : daily!.total;
    const pct = t > 0 ? Math.round((s / t) * 100) : 0;
    const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
    return (
      <div className="flex flex-col gap-5">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Home
        </button>
        <div className="flex flex-col items-center gap-4 py-6">
          <Trophy size={48} className="text-yellow-400" />
          <h2 className="text-2xl font-extrabold text-gray-800">
            Daily Challenge
          </h2>
          {!done && (
            <p className="text-gray-500 text-sm">
              You already completed today's challenge!
            </p>
          )}
          <div className="text-6xl font-extrabold text-teal-600">{pct}%</div>
          <p className="text-gray-600">
            {s} / {t} correct
          </p>
          <div className="text-3xl">
            {"★".repeat(stars)}
            {"☆".repeat(3 - stars)}
          </div>
          <p className="text-gray-500 text-sm">
            Come back tomorrow for a new challenge!
          </p>
          <button
            type="button"
            onClick={onBack}
            className="w-full py-4 bg-teal-600 text-white rounded-2xl font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (quizQuestions.length === 0) return null;

  const q = quizQuestions[idx];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Home
        </button>
        <div className="flex-1 h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-yellow-400 rounded-full transition-all"
            style={{ width: `${(idx / quizQuestions.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-500">{idx + 1}/10</span>
      </div>

      <div className="flex items-center gap-2">
        <Trophy size={16} className="text-yellow-500" />
        <span className="text-sm font-bold text-gray-700">Daily Challenge</span>
      </div>

      <QuestionCard
        question={q}
        questionNumber={idx + 1}
        totalQuestions={quizQuestions.length}
        selectedIndex={selected}
        onSelect={handleSelect}
        onNext={handleNext}
        nextLabel={
          idx + 1 >= quizQuestions.length ? "Finish Challenge" : "Next Question"
        }
      />
    </div>
  );
}
