import { ArrowLeft, Clock, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import { buildQuiz } from "../utils/quizUtils";

interface QuickStudyPageProps {
  questions: Question[];
  onBack: () => void;
}

export default function QuickStudyPage({
  questions,
  onBack,
}: QuickStudyPageProps) {
  const DURATION = 5 * 60; // 5 minutes
  const [quizQuestions] = useState(() => buildQuiz(questions, 10));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  const handleSelect = (i: number) => {
    setSelected(i);
    if (quizQuestions[idx] && i === Number(quizQuestions[idx].correctIndex)) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= quizQuestions.length) {
      clearInterval(timerRef.current!);
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timerColor =
    timeLeft < 60
      ? "text-red-500"
      : timeLeft < 120
        ? "text-yellow-500"
        : "text-teal-600";

  if (done || quizQuestions.length === 0) {
    const pct =
      quizQuestions.length > 0
        ? Math.round((score / quizQuestions.length) * 100)
        : 0;
    return (
      <div className="flex flex-col gap-5">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Home
        </button>
        <div className="flex flex-col items-center gap-4 py-8">
          <Zap size={48} className="text-yellow-400" />
          <h2 className="text-2xl font-extrabold text-gray-800">
            Quick Study Complete!
          </h2>
          <div className="text-6xl font-extrabold text-teal-600">{pct}%</div>
          <p className="text-gray-600">
            {score} / {quizQuestions.length} correct
          </p>
          {timeLeft > 0 && (
            <p className="text-sm text-gray-400">
              {mins}:{secs.toString().padStart(2, "0")} remaining
            </p>
          )}
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

  const q = quizQuestions[idx];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Exit
        </button>
        <div className={`flex items-center gap-1.5 font-bold ${timerColor}`}>
          <Clock size={16} />
          {mins}:{secs.toString().padStart(2, "0")}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Zap size={14} className="text-yellow-500" />
        <span className="text-sm font-bold text-gray-700">Quick Study</span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full ml-2">
          <div
            className="h-full bg-yellow-400 rounded-full transition-all"
            style={{ width: `${(idx / quizQuestions.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-500">{idx + 1}/10</span>
      </div>

      <QuestionCard
        question={q}
        questionNumber={idx + 1}
        totalQuestions={quizQuestions.length}
        selectedIndex={selected}
        onSelect={handleSelect}
        onNext={handleNext}
        nextLabel={idx + 1 >= quizQuestions.length ? "Finish" : "Next"}
      />
    </div>
  );
}
