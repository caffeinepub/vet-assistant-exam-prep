import { ArrowLeft, ChevronRight, Stethoscope } from "lucide-react";
import { useState } from "react";
import type { Scenario } from "../backend";
import LoadingScreen from "../components/LoadingScreen";

interface ScenariosPageProps {
  scenarios: Scenario[];
  loading: boolean;
}

const letters = ["A", "B", "C", "D"];

export default function ScenariosPage({
  scenarios,
  loading,
}: ScenariosPageProps) {
  const [selected, setSelected] = useState<Scenario | null>(null);
  const [choice, setChoice] = useState<number | null>(null);

  if (loading) return <LoadingScreen />;

  if (!selected) {
    return (
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-extrabold text-gray-800">
          Clinic Scenarios
        </h2>
        <p className="text-sm text-gray-500">
          Practice real-world veterinary situations
        </p>
        {scenarios.map((s, i) => (
          <button
            type="button"
            key={String(s.id)}
            data-ocid={`scenario.item.${i + 1}`}
            onClick={() => {
              setSelected(s);
              setChoice(null);
            }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-left flex items-start gap-4 active:scale-[0.98] transition-transform"
          >
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Stethoscope size={18} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-700 line-clamp-2">
                {s.situation}
              </p>
              {s.category && (
                <span className="inline-block mt-1 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                  {s.category}
                </span>
              )}
            </div>
            <ChevronRight
              size={16}
              className="text-gray-300 flex-shrink-0 mt-1"
            />
          </button>
        ))}
      </div>
    );
  }

  const correct = Number(selected.correctIndex);

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setSelected(null)}
        className="flex items-center gap-1 text-teal-600 font-semibold text-sm"
      >
        <ArrowLeft size={16} /> Scenarios
      </button>

      {selected.category && (
        <span className="self-start text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">
          {selected.category}
        </span>
      )}

      {/* Situation */}
      <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
        <div className="flex items-center gap-2 mb-2">
          <Stethoscope size={16} className="text-green-600" />
          <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
            Clinical Scenario
          </span>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed">
          {selected.situation}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <p className="font-semibold text-gray-800">{selected.question}</p>
      </div>

      <div className="flex flex-col gap-2">
        {selected.choices.map((opt, i) => {
          let style = "bg-white border-gray-200 hover:border-green-400";
          if (choice !== null) {
            if (i === correct)
              style = "bg-green-50 border-green-500 text-green-800";
            else if (i === choice)
              style = "bg-red-50 border-red-400 text-red-800";
            else style = "bg-white border-gray-200 opacity-50";
          }
          return (
            <button
              type="button"
              // biome-ignore lint/suspicious/noArrayIndexKey: positional list
              key={i}
              data-ocid="scenario.choice_button"
              onClick={() => choice === null && setChoice(i)}
              disabled={choice !== null}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${style}`}
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-bold">
                {letters[i]}
              </span>
              <span className="text-sm font-medium">{opt}</span>
            </button>
          );
        })}
      </div>

      {choice !== null && (
        <div
          className={`rounded-2xl p-4 ${
            choice === correct
              ? "bg-green-50 border border-green-200"
              : "bg-orange-50 border border-orange-200"
          }`}
        >
          <p
            className={`text-sm font-semibold mb-1 ${
              choice === correct ? "text-green-700" : "text-orange-700"
            }`}
          >
            {choice === correct ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          <p className="text-sm text-gray-700">{selected.explanation}</p>
        </div>
      )}

      {choice !== null && (
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="w-full py-4 bg-green-600 text-white rounded-2xl font-semibold"
        >
          Back to Scenarios
        </button>
      )}
    </div>
  );
}
