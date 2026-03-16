import { ArrowLeft, Shuffle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Question } from "../backend";
import LoadingScreen from "../components/LoadingScreen";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface QuizPageProps {
  questions: Question[];
  loading: boolean;
}

const CATEGORIES = [
  { key: "all", label: "All Categories" },
  { key: "animal_restraint", label: "Animal Restraint" },
  { key: "vital_signs", label: "Animal Vital Signs" },
  { key: "instruments", label: "Veterinary Instruments" },
  { key: "sanitation", label: "Clinic Sanitation & Safety" },
  { key: "terminology", label: "Veterinary Terminology" },
  { key: "client_communication", label: "Client Communication" },
  { key: "record_keeping", label: "Medical Record Keeping" },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizPage({ questions, loading }: QuizPageProps) {
  const [mode, setMode] = useState<"select" | "quiz" | "score">("select");
  const [categoryKey, setCategoryKey] = useState("all");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>(
    "vet_bookmarks",
    [],
  );
  const [_scores, setScores] = useLocalStorage<
    Record<string, { correct: number; total: number }>
  >("vet_scores", {});

  const startQuiz = useCallback(
    (catKey: string) => {
      const filtered =
        catKey === "all"
          ? questions
          : questions.filter((q) => q.category === catKey);
      setQuizQuestions(
        shuffle(filtered).slice(0, Math.min(20, filtered.length)),
      );
      setCurrentIdx(0);
      setSelectedIndex(null);
      setScore(0);
      setCategoryKey(catKey);
      setMode("quiz");
    },
    [questions],
  );

  const handleSelect = (i: number) => {
    setSelectedIndex(i);
    const correct = Number(quizQuestions[currentIdx].correctIndex);
    if (i === correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= quizQuestions.length) {
      // Save score
      const cat = quizQuestions[0]?.category || categoryKey;
      setScores((prev) => {
        const entry = prev[cat] || { correct: 0, total: 0 };
        const newCorrect = entry.correct + score;
        const newTotal = entry.total + quizQuestions.length;
        return { ...prev, [cat]: { correct: newCorrect, total: newTotal } };
      });
      setMode("score");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedIndex(null);
    }
  };

  const currentQ = quizQuestions[currentIdx];
  const qId = currentQ ? Number(currentQ.id) : -1;
  const isBookmarked = bookmarks.includes(qId);

  const toggleBookmark = () => {
    setBookmarks((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId],
    );
  };

  if (loading) return <LoadingScreen />;

  if (mode === "select") {
    return (
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">Practice Quiz</h2>
        <p className="text-sm text-gray-500">Choose a category to start</p>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat.key === "all"
                ? questions.length
                : questions.filter((q) => q.category === cat.key).length;
            return (
              <button
                type="button"
                key={cat.key}
                data-ocid="quiz.category_select"
                onClick={() => startQuiz(cat.key)}
                className="w-full bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
              >
                <span className="font-semibold text-gray-700">{cat.label}</span>
                <span className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded-full font-semibold">
                  {count} Qs
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (mode === "score") {
    return (
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => setMode("select")}
          className="flex items-center gap-2 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Categories
        </button>
        <ScoreScreen
          score={score}
          total={quizQuestions.length}
          onRetry={() => startQuiz(categoryKey)}
          onBack={() => setMode("select")}
          backLabel="Categories"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setMode("select")}
          className="flex items-center gap-2 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all"
            style={{ width: `${(currentIdx / quizQuestions.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-500 whitespace-nowrap">
          {currentIdx + 1}/{quizQuestions.length}
        </span>
      </div>

      {currentQ && (
        <QuestionCard
          question={currentQ}
          questionNumber={currentIdx + 1}
          totalQuestions={quizQuestions.length}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          onNext={handleNext}
          isBookmarked={isBookmarked}
          onBookmark={toggleBookmark}
          nextLabel={
            currentIdx + 1 >= quizQuestions.length
              ? "See Results"
              : "Next Question"
          }
        />
      )}
    </div>
  );
}
