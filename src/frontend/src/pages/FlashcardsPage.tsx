import { ArrowLeft, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { useState } from "react";
import type { Flashcard } from "../backend";
import FlashCard from "../components/FlashCard";
import LoadingScreen from "../components/LoadingScreen";
import { isDebugMode, registerDebugTap } from "../utils/debugMode";
import { shuffle } from "../utils/quizUtils";

interface FlashcardsPageProps {
  flashcards: Flashcard[];
  loading: boolean;
}

const CATEGORIES = [
  { key: "all", label: "All Categories" },
  { key: "instruments", label: "Veterinary Instruments" },
  { key: "vital_signs", label: "Vital Sign Ranges" },
  { key: "medical_terms", label: "Medical Terms" },
  { key: "animal_handling", label: "Animal Handling" },
  { key: "restraint", label: "Restraint Techniques" },
  { key: "sanitation", label: "Sanitation & Safety" },
  { key: "terminology", label: "Anatomy & Terminology" },
  { key: "communication", label: "Communication & Records" },
];

export default function FlashcardsPage({
  flashcards,
  loading,
}: FlashcardsPageProps) {
  const [categoryKey, setCategoryKey] = useState<string | null>(null);
  // shuffledDeck is built once per session (or on manual reshuffle)
  const [deck, setDeck] = useState<Flashcard[]>([]);
  // currentIndex advances sequentially — no random picks
  const [idx, setIdx] = useState(0);
  // track IDs shown this session to prevent any accidental repeats
  const [shownIDs, setShownIDs] = useState<Set<bigint>>(new Set());
  const [debugOn, setDebugOn] = useState(false);

  const startDeck = (key: string) => {
    const cards =
      key === "all" ? flashcards : flashcards.filter((f) => f.category === key);
    const shuffled = shuffle(cards);
    setDeck(shuffled);
    setIdx(0);
    setShownIDs(new Set([shuffled[0]?.id].filter(Boolean) as bigint[]));
    setCategoryKey(key);
  };

  // Manual reshuffle — only after completing the deck or user request
  const handleShuffle = () => {
    setDeck((d) => shuffle(d));
    setIdx(0);
    setShownIDs(new Set());
  };

  const handleNext = () => {
    const nextIdx = idx + 1;
    if (nextIdx >= deck.length) {
      // Full deck complete — reshuffle for a new round
      const reshuffled = shuffle(deck);
      setDeck(reshuffled);
      setIdx(0);
      setShownIDs(new Set([reshuffled[0]?.id].filter(Boolean) as bigint[]));
    } else {
      setIdx(nextIdx);
      setShownIDs((prev) => {
        const next = new Set(prev);
        next.add(deck[nextIdx].id);
        return next;
      });
    }
  };

  const handlePrev = () => {
    setIdx((i) => Math.max(0, i - 1));
  };

  const handleCounterTap = () => {
    const toggled = registerDebugTap();
    if (toggled) setDebugOn(isDebugMode());
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

  const currentCard = deck[idx];

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

      {/* Tap counter 5x to toggle debug */}
      <button
        type="button"
        onClick={handleCounterTap}
        className="text-center text-sm text-gray-500 select-none"
      >
        {idx + 1} / {deck.length}
      </button>

      {debugOn && currentCard && (
        <div className="text-xs bg-yellow-50 border border-yellow-300 rounded-xl px-3 py-1.5 text-yellow-800 font-mono">
          🔍 DEBUG — Card ID: {String(currentCard.id)} | Seen this round:{" "}
          {shownIDs.size} / {deck.length}
        </div>
      )}

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

      <FlashCard key={`${idx}-${currentCard?.id}`} card={currentCard} />

      <div className="flex gap-3">
        <button
          type="button"
          data-ocid="flashcard.prev_button"
          onClick={handlePrev}
          disabled={idx === 0}
          className="flex-1 py-4 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-600 font-semibold disabled:opacity-40"
        >
          <ChevronLeft size={18} /> Prev
        </button>
        <button
          type="button"
          data-ocid="flashcard.next_button"
          onClick={handleNext}
          className="flex-1 py-4 bg-teal-600 text-white rounded-2xl flex items-center justify-center gap-2 font-semibold"
        >
          {idx === deck.length - 1 ? "Restart" : "Next"}{" "}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
