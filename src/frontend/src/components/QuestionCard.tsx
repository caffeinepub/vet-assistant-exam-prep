import { Bookmark, BookmarkCheck } from "lucide-react";
import type { Question } from "../backend";

interface QuestionCardProps {
  question: Question;
  questionNumber?: number;
  totalQuestions?: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onNext?: () => void;
  isBookmarked?: boolean;
  onBookmark?: () => void;
  showNext?: boolean;
  nextLabel?: string;
}

const LETTERS = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
  onNext,
  isBookmarked,
  onBookmark,
  showNext = true,
  nextLabel = "Next Question",
}: QuestionCardProps) {
  const answered = selectedIndex !== null;
  const correct = Number(question.correctIndex);

  const getOptionStyle = (i: number) => {
    if (!answered)
      return "bg-white border-gray-200 hover:border-teal-400 hover:bg-teal-50 active:scale-[0.98]";
    if (i === correct) return "bg-green-50 border-green-500 text-green-800";
    if (i === selectedIndex && i !== correct)
      return "bg-red-50 border-red-400 text-red-800";
    return "bg-white border-gray-200 opacity-60";
  };

  return (
    <div className="flex flex-col gap-4">
      {questionNumber !== undefined && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Question {questionNumber}
            {totalQuestions ? ` of ${totalQuestions}` : ""}
          </span>
          {onBookmark && (
            <button
              type="button"
              data-ocid="quiz.bookmark_toggle"
              onClick={onBookmark}
              className="p-1 text-gray-400 hover:text-teal-600 transition-colors"
            >
              {isBookmarked ? (
                <BookmarkCheck size={20} className="text-teal-600" />
              ) : (
                <Bookmark size={20} />
              )}
            </button>
          )}
        </div>
      )}

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <p className="text-base font-semibold text-gray-800 leading-snug">
          {question.text}
        </p>
        {question.category && (
          <span className="inline-block mt-2 text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
            {question.category.replace(/_/g, " ")}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((opt, i) => (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: options are positional choices A/B/C/D
            key={i}
            type="button"
            data-ocid="quiz.answer_button"
            onClick={() => !answered && onSelect(i)}
            disabled={answered}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${getOptionStyle(i)}`}
          >
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                !answered
                  ? "border-gray-300 text-gray-500"
                  : i === correct
                    ? "border-green-500 bg-green-500 text-white"
                    : i === selectedIndex
                      ? "border-red-400 bg-red-400 text-white"
                      : "border-gray-200 text-gray-400"
              }`}
            >
              {LETTERS[i]}
            </span>
            <span className="text-sm font-medium leading-snug">{opt}</span>
          </button>
        ))}
      </div>

      {answered && (
        <div
          className={`rounded-2xl p-4 ${
            selectedIndex === correct
              ? "bg-green-50 border border-green-200"
              : "bg-orange-50 border border-orange-200"
          }`}
        >
          <p
            className={`text-sm font-semibold mb-1 ${
              selectedIndex === correct ? "text-green-700" : "text-orange-700"
            }`}
          >
            {selectedIndex === correct ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}

      {answered && showNext && onNext && (
        <button
          type="button"
          data-ocid="quiz.next_button"
          onClick={onNext}
          className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold text-sm transition-colors"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}
