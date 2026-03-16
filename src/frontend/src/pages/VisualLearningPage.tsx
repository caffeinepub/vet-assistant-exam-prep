import { ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { type VisualQuestion, visualQuestions } from "../data/visualQuestions";

const VISUAL_CATEGORIES = [
  {
    key: "Surgical Instruments",
    label: "Surgical Instruments",
    image: "/assets/generated/surgical-instruments.dim_800x500.jpg",
  },
  {
    key: "Dog Restraint",
    label: "Dog Restraint",
    image: "/assets/generated/dog-restraint.dim_800x500.jpg",
  },
  {
    key: "Cat Restraint",
    label: "Cat Restraint",
    image: "/assets/generated/cat-restraint.dim_800x500.jpg",
  },
  {
    key: "Dog Anatomy",
    label: "Dog Anatomy",
    image: "/assets/generated/dog-anatomy.dim_800x500.jpg",
  },
  {
    key: "Cat Anatomy",
    label: "Cat Anatomy",
    image: "/assets/generated/cat-anatomy.dim_800x500.jpg",
  },
];

const letters = ["A", "B", "C", "D"];

export default function VisualLearningPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState<VisualQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const start = (cat: string) => {
    const qs = visualQuestions.filter((q) => q.category === cat);
    setQuestions(qs);
    setIdx(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setCategory(cat);
  };

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[idx].correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  if (!category) {
    return (
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">
          Visual Learning
        </h2>
        <p className="text-sm text-gray-500">
          Identify veterinary images and diagrams
        </p>
        {VISUAL_CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat.key}
            onClick={() => start(cat.key)}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex items-center active:scale-[0.98] transition-transform"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-20 h-16 object-cover flex-shrink-0"
            />
            <div className="flex-1 px-4 text-left">
              <p className="font-semibold text-gray-700">{cat.label}</p>
              <p className="text-xs text-gray-400">
                {visualQuestions.filter((q) => q.category === cat.key).length}{" "}
                questions
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-300 mr-3" />
          </button>
        ))}
      </div>
    );
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className="self-start flex items-center gap-1 text-teal-600 text-sm font-semibold"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="text-7xl font-extrabold text-teal-600">{pct}%</div>
        <p className="text-gray-600">
          {score} / {questions.length} correct
        </p>
        <button
          type="button"
          onClick={() => start(category)}
          className="w-full py-4 bg-teal-600 text-white rounded-2xl font-semibold"
        >
          Try Again
        </button>
        <button
          type="button"
          onClick={() => setCategory(null)}
          className="w-full py-4 border-2 border-teal-600 text-teal-600 rounded-2xl font-semibold"
        >
          Back to Categories
        </button>
      </div>
    );
  }

  const q = questions[idx];
  if (!q) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex-1 h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-orange-400 rounded-full transition-all"
            style={{ width: `${(idx / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-500">
          {idx + 1}/{questions.length}
        </span>
      </div>

      <img
        src={q.image}
        alt={q.imageCaption}
        className="w-full rounded-2xl object-cover"
        style={{ maxHeight: 220 }}
      />
      <p className="text-xs text-gray-400 text-center">{q.imageCaption}</p>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <p className="font-semibold text-gray-800">{q.question}</p>
      </div>

      <div className="flex flex-col gap-2">
        {q.options.map((opt, i) => {
          let style = "bg-white border-gray-200 hover:border-orange-400";
          if (selected !== null) {
            if (i === q.correctIndex)
              style = "bg-green-50 border-green-500 text-green-800";
            else if (i === selected)
              style = "bg-red-50 border-red-400 text-red-800";
            else style = "bg-white border-gray-200 opacity-50";
          }
          return (
            <button
              type="button"
              // biome-ignore lint/suspicious/noArrayIndexKey: positional list
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${style}`}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-bold">
                {letters[i]}
              </span>
              <span className="text-sm font-medium">{opt}</span>
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div
          className={`rounded-2xl p-4 ${
            selected === q.correctIndex
              ? "bg-green-50 border border-green-200"
              : "bg-orange-50 border border-orange-200"
          }`}
        >
          <p
            className={`text-sm font-semibold mb-1 ${
              selected === q.correctIndex ? "text-green-700" : "text-orange-700"
            }`}
          >
            {selected === q.correctIndex ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <p className="text-sm text-gray-700">{q.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button
          type="button"
          onClick={handleNext}
          className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold"
        >
          {idx + 1 >= questions.length ? "See Results" : "Next"}
        </button>
      )}
    </div>
  );
}
