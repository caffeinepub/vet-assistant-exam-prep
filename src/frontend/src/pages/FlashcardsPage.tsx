import { ArrowLeft, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { useState } from "react";
import type { Flashcard } from "../backend";
import FlashCard from "../components/FlashCard";
import LoadingScreen from "../components/LoadingScreen";

interface FlashcardsPageProps {
  flashcards: Flashcard[];
  loading: boolean;
}

const CATEGORIES = [
  { key: "all", label: "All Categories" },
  { key: "instruments", label: "Veterinary Instruments" },
  { key: "medical_terms", label: "Medical Terms" },
  { key: "vital_signs", label: "Vital Sign Ranges" },
  { key: "animal_handling", label: "Animal Handling Techniques" },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function FlashcardsPage({
  flashcards,
  loading,
}: FlashcardsPageProps) {
  const [categoryKey, setCategoryKey] = useState<string | null>(null);
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [idx, setIdx] = useState(0);

  const startDeck = (key: string) => {
    const cards =
      key === "all" ? flashcards : flashcards.filter((f) => f.category === key);
    setDeck(shuffle(cards));
    setIdx(0);
    setCategoryKey(key);
  };

  const handleShuffle = () => {
    setDeck((d) => shuffle(d));
    setIdx(0);
  };

  if (loading) return <LoadingScreen />;

  if (categoryKey === null) {
    return (
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">Flashcards</h2>
        <p className="text-sm text-gray-500">Choose a category</p>
        {CATEGORIES.map((cat) => {
          const count =
            cat.key === "all"
              ? flashcards.length
              : flashcards.filter((f) => f.category === cat.key).length;
          return (
            <button
              type="button"
              key={cat.key}
              onClick={() => startDeck(cat.key)}
              className="w-full bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
            >
              <span className="font-semibold text-gray-700">{cat.label}</span>
              <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full font-semibold">
                {count} cards
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  if (deck.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-10">
        <p className="text-gray-500">No flashcards in this category yet.</p>
        <button
          type="button"
          onClick={() => setCategoryKey(null)}
          className="text-teal-600 font-semibold"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCategoryKey(null)}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Categories
        </button>
        <button
          type="button"
          data-ocid="flashcard.shuffle_button"
          onClick={handleShuffle}
          className="flex items-center gap-1 text-gray-500 text-sm"
        >
          <Shuffle size={14} /> Shuffle
        </button>
      </div>

      <p className="text-center text-sm text-gray-500">
        {idx + 1} / {deck.length}
      </p>

      {/* Progress dots */}
      <div className="flex gap-1 justify-center flex-wrap">
        {deck.slice(0, Math.min(deck.length, 20)).map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: positional list
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === idx ? "bg-teal-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <FlashCard key={`${idx}-${deck[idx]?.id}`} card={deck[idx]} />

      <div className="flex gap-3">
        <button
          type="button"
          data-ocid="flashcard.prev_button"
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="flex-1 py-4 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-600 font-semibold disabled:opacity-40"
        >
          <ChevronLeft size={18} /> Prev
        </button>
        <button
          type="button"
          data-ocid="flashcard.next_button"
          onClick={() => setIdx((i) => Math.min(deck.length - 1, i + 1))}
          disabled={idx === deck.length - 1}
          className="flex-1 py-4 bg-teal-600 text-white rounded-2xl flex items-center justify-center gap-2 font-semibold disabled:opacity-40"
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
