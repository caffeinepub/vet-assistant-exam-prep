import { ArrowLeft, ClipboardList } from "lucide-react";
import { useCallback, useState } from "react";
import type { Question } from "../backend";
import LoadingScreen from "../components/LoadingScreen";
import QuestionCard from "../components/QuestionCard";
import ScoreScreen from "../components/ScoreScreen";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { isDebugMode, registerDebugTap } from "../utils/debugMode";
import { buildQuiz, buildWeightedExam } from "../utils/quizUtils";

interface QuizPageProps {
  questions: Question[];
  loading: boolean;
}

const CATEGORIES = [
  { key: "all", label: "All Categories" },
  { key: "sanitation", label: "Sanitation & Safety" },
  { key: "pharmacology", label: "Pharmacology" },
  { key: "administration", label: "Administration" },
  { key: "nursing", label: "Nursing Care" },
  { key: "laboratory", label: "Laboratory Procedures" },
  { key: "legal_safety_ethics", label: "Legal, Safety & Ethics" },
  { key: "radiology", label: "Radiology" },
  { key: "surgery", label: "Surgery" },
  { key: "animal_medicine", label: "Animal Medicine" },
];

// CVA exam weight labels shown in the category list
const WEIGHT_LABELS: Record<string, string> = {
  sanitation: "18%",
  pharmacology: "15%",
  administration: "13%",
  nursing: "13%",
  laboratory: "11%",
  legal_safety_ethics: "9%",
  radiology: "7%",
  surgery: "7%",
  animal_medicine: "7%",
};

export default function QuizPage({ questions, loading }: QuizPageProps) {
  const [mode, setMode] = useState<"select" | "quiz" | "score">("select");
  const [categoryKey, setCategoryKey] = useState("all");
  const [isExamMode, setIsExamMode] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [usedQuestionIDs, setUsedQuestionIDs] = useState<Set<bigint>>(
    new Set(),
  );
  const [debugOn, setDebugOn] = useState(false);
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>(
    "vet_bookmarks",
    [],
  );
  const [_scores, setScores] = useLocalStorage<
    Record<string, { correct: number; total: number }>
  >("vet_scores", {});

  const startQuiz = useCallback(
    (catKey: string) => {
      let pool =
        catKey === "all"
          ? questions
          : questions.filter((q) => q.category === catKey);

      if (pool.length < 5 && catKey !== "all") {
        pool = questions;
      }

      const selected = buildQuiz(pool, 20);
      setQuizQuestions(selected);
      setUsedQuestionIDs(new Set(selected.map((q) => q.id)));
      setCurrentIdx(0);
      setSelectedIndex(null);
      setScore(0);
      setCategoryKey(catKey);
      setIsExamMode(false);
      setMode("quiz");
    },
    [questions],
  );

  const startExamMode = useCallback(() => {
    const selected = buildWeightedExam(questions, 50);
    setQuizQuestions(selected);
    setUsedQuestionIDs(new Set(selected.map((q) => q.id)));
    setCurrentIdx(0);
    setSelectedIndex(null);
    setScore(0);
    setCategoryKey("exam");
    setIsExamMode(true);
    setMode("quiz");
  }, [questions]);

  const handleSelect = (i: number) => {
    setSelectedIndex(i);
    const correct = Number(quizQuestions[currentIdx].correctIndex);
    if (i === correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= quizQuestions.length) {
      const cat = isExamMode
        ? "exam"
        : quizQuestions[0]?.category || categoryKey;
      setScores((prev) => {
        const entry = prev[cat] || { correct: 0, total: 0 };
        return {
          ...prev,
          [cat]: {
            correct: entry.correct + score,
            total: entry.total + quizQuestions.length,
          },
        };
      });
      setMode("score");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedIndex(null);
    }
  };

  const handleCounterTap = () => {
    const toggled = registerDebugTap();
    if (toggled) setDebugOn(isDebugMode());
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
      <div className="paw-bg flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">Practice Quiz</h2>
        <p className="text-sm text-gray-500">Choose a mode to start</p>

        {/* Exam Mode — highlighted card */}
        <button
          type="button"
          data-ocid="quiz.exam_mode"
          onClick={startExamMode}
          className="w-full bg-teal-600 text-white rounded-2xl p-4 text-left shadow-md flex items-center justify-between active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-3">
            <ClipboardList size={20} className="shrink-0" />
            <div>
              <p className="font-extrabold text-base">Exam Simulation Mode</p>
              <p className="text-teal-100 text-xs mt-0.5">
                50 questions · Weighted by real CVA exam distribution
              </p>
            </div>
          </div>
          <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full font-semibold whitespace-nowrap">
            {questions.length} Qs
          </span>
        </button>

        <div className="flex items-center gap-2 my-1">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or study by category</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat.key === "all"
                ? questions.length
                : questions.filter((q) => q.category === cat.key).length;
            const weight = WEIGHT_LABELS[cat.key];
            return (
              <button
                type="button"
                key={cat.key}
                data-ocid="quiz.category_select"
                onClick={() => startQuiz(cat.key)}
                className="w-full bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
              >
                <div>
                  <span className="font-semibold text-gray-700">
                    {cat.label}
                  </span>
                  {weight && (
                    <span className="ml-2 text-xs text-teal-500 font-medium">
                      {weight} of exam
                    </span>
                  )}
                </div>
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
      <div className="paw-bg flex flex-col gap-4">
        <button
          type="button"
          onClick={() => setMode("select")}
          className="flex items-center gap-2 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Categories
        </button>
        {isExamMode && (
          <div className="bg-teal-50 border border-teal-200 rounded-2xl px-4 py-2 text-sm text-teal-700 font-medium">
            Exam Simulation — CVA weighted distribution
          </div>
        )}
        <ScoreScreen
          score={score}
          total={quizQuestions.length}
          onRetry={isExamMode ? startExamMode : () => startQuiz(categoryKey)}
          onBack={() => setMode("select")}
          backLabel="Categories"
        />
      </div>
    );
  }

  return (
    <div className="paw-bg flex flex-col gap-4">
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
        <button
          type="button"
          onClick={handleCounterTap}
          className="text-xs text-gray-500 whitespace-nowrap select-none"
        >
          {currentIdx + 1}/{quizQuestions.length}
        </button>
      </div>

      {isExamMode && (
        <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-3 py-1.5">
          <ClipboardList size={14} className="text-teal-600 shrink-0" />
          <span className="text-xs text-teal-700 font-semibold">
            Exam Simulation — CVA weighted distribution
          </span>
        </div>
      )}

      {debugOn && currentQ && (
        <div className="text-xs bg-yellow-50 border border-yellow-300 rounded-xl px-3 py-1.5 text-yellow-800 font-mono">
          🔍 DEBUG — Question ID: {String(currentQ.id)} | Category:{" "}
          {currentQ.category} | Unique:{" "}
          {String(!usedQuestionIDs.has(currentQ.id) ? "❌ DUPE" : "✅ OK")}
        </div>
      )}

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
