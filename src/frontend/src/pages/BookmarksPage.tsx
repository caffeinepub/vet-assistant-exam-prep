import { ArrowLeft, BookmarkX } from "lucide-react";
import { useState } from "react";
import type { Question } from "../backend";
import QuestionCard from "../components/QuestionCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface BookmarksPageProps {
  questions: Question[];
  onBack: () => void;
}

export default function BookmarksPage({
  questions,
  onBack,
}: BookmarksPageProps) {
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>(
    "vet_bookmarks",
    [],
  );
  const [quizMode, setQuizMode] = useState(false);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const bookmarkedQs = questions.filter((q) =>
    bookmarks.includes(Number(q.id)),
  );

  const removeBookmark = (id: number) => {
    setBookmarks((prev) => prev.filter((b) => b !== id));
  };

  if (bookmarkedQs.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Home
        </button>
        <h2 className="text-xl font-extrabold text-gray-800">Bookmarks</h2>
        <div className="flex flex-col items-center gap-4 py-12">
          <BookmarkX size={48} className="text-gray-300" />
          <p className="text-gray-500 text-center">
            No bookmarks yet. Tap the bookmark icon on any question to save it
            here.
          </p>
        </div>
      </div>
    );
  }

  if (quizMode) {
    const q = bookmarkedQs[idx];
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuizMode(false)}
            className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
          >
            <ArrowLeft size={16} /> Bookmarks
          </button>
          <span className="text-xs text-gray-500">
            {idx + 1}/{bookmarkedQs.length}
          </span>
        </div>
        {q && (
          <QuestionCard
            question={q}
            questionNumber={idx + 1}
            totalQuestions={bookmarkedQs.length}
            selectedIndex={selected}
            onSelect={setSelected}
            onNext={() => {
              setIdx((i) => Math.min(i + 1, bookmarkedQs.length - 1));
              setSelected(null);
            }}
            isBookmarked={true}
            onBookmark={() => removeBookmark(Number(q.id))}
            nextLabel={idx + 1 >= bookmarkedQs.length ? "Done" : "Next"}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
      >
        <ArrowLeft size={16} /> Home
      </button>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-gray-800">Bookmarks</h2>
        <span className="text-xs text-gray-400">
          {bookmarkedQs.length} saved
        </span>
      </div>

      <button
        type="button"
        onClick={() => {
          setIdx(0);
          setSelected(null);
          setQuizMode(true);
        }}
        className="w-full py-4 bg-teal-600 text-white rounded-2xl font-semibold"
      >
        Practice All Bookmarks
      </button>

      <div className="flex flex-col gap-2">
        {bookmarkedQs.map((q) => (
          <div
            key={String(q.id)}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 line-clamp-2">
                {q.text}
              </p>
              <span className="inline-block mt-1 text-xs bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full">
                {q.category.replace(/_/g, " ")}
              </span>
            </div>
            <button
              type="button"
              onClick={() => removeBookmark(Number(q.id))}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              <BookmarkX size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
