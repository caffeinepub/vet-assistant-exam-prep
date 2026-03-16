import { useState } from "react";
import type { Flashcard } from "../backend";

interface FlashCardProps {
  card: Flashcard;
}

export default function FlashCard({ card }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      data-ocid="flashcard.flip_button"
      style={{ perspective: "1000px" }}
      className="w-full cursor-pointer text-left bg-transparent border-0 p-0"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          minHeight: "220px",
        }}
      >
        {/* Front */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 bg-white rounded-3xl shadow-md border border-gray-100 flex flex-col items-center justify-center p-8"
        >
          <span className="text-xs text-teal-600 font-semibold uppercase tracking-widest mb-4">
            Term
          </span>
          <p className="text-2xl font-bold text-gray-800 text-center">
            {card.term}
          </p>
          <span className="mt-4 text-xs text-gray-400">Tap to reveal</span>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-teal-600 rounded-3xl shadow-md flex flex-col items-center justify-center p-8"
        >
          <span className="text-xs text-teal-100 font-semibold uppercase tracking-widest mb-4">
            Definition
          </span>
          <p className="text-base font-semibold text-white text-center mb-3">
            {card.definition}
          </p>
          {card.usage && (
            <p className="text-sm text-teal-100 text-center italic">
              {card.usage}
            </p>
          )}
          <span className="mt-4 text-xs text-teal-200">Tap to flip back</span>
        </div>
      </div>
    </button>
  );
}
