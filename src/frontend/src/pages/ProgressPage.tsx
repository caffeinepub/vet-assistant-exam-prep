import {
  BarChart2,
  BookmarkCheck,
  Flame,
  PlayCircle,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CATEGORIES = [
  { key: "animal_restraint", label: "Animal Restraint" },
  { key: "vital_signs", label: "Vital Signs" },
  { key: "instruments", label: "Instruments" },
  { key: "sanitation", label: "Sanitation" },
  { key: "terminology", label: "Terminology" },
  { key: "client_communication", label: "Client Comm." },
  { key: "record_keeping", label: "Record Keeping" },
];

export default function ProgressPage() {
  const [scores] = useLocalStorage<
    Record<string, { correct: number; total: number }>
  >("vet_scores", {});
  const [streak] = useLocalStorage<{ lastDate: string; count: number }>(
    "vet_streak",
    { lastDate: "", count: 0 },
  );
  const [watched] = useLocalStorage<string[]>("vet_watched_videos", []);
  const [bookmarks] = useLocalStorage<number[]>("vet_bookmarks", []);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReset = () => {
    localStorage.removeItem("vet_scores");
    localStorage.removeItem("vet_bookmarks");
    localStorage.removeItem("vet_daily_challenge");
    localStorage.removeItem("vet_streak");
    localStorage.removeItem("vet_watched_videos");
    window.location.reload();
  };

  const totalCorrect = Object.values(scores).reduce((s, v) => s + v.correct, 0);
  const totalAnswered = Object.values(scores).reduce((s, v) => s + v.total, 0);
  const overallPct =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-extrabold text-gray-800">Progress</h2>

      {/* Overview cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-teal-50 rounded-2xl p-4">
          <p className="text-xs text-teal-600 font-semibold mb-1">
            Overall Accuracy
          </p>
          <p className="text-3xl font-extrabold text-teal-700">{overallPct}%</p>
          <p className="text-xs text-teal-600 mt-1">
            {totalCorrect}/{totalAnswered} correct
          </p>
        </div>
        <div className="bg-orange-50 rounded-2xl p-4">
          <div className="flex items-center gap-1 mb-1">
            <Flame size={14} className="text-orange-500" />
            <p className="text-xs text-orange-600 font-semibold">
              Study Streak
            </p>
          </div>
          <p className="text-3xl font-extrabold text-orange-500">
            {streak.count}
          </p>
          <p className="text-xs text-orange-500 mt-1">days in a row</p>
        </div>
        <div className="bg-red-50 rounded-2xl p-4">
          <div className="flex items-center gap-1 mb-1">
            <PlayCircle size={14} className="text-red-500" />
            <p className="text-xs text-red-600 font-semibold">Videos Watched</p>
          </div>
          <p className="text-3xl font-extrabold text-red-500">
            {watched.length}/6
          </p>
        </div>
        <div className="bg-yellow-50 rounded-2xl p-4">
          <div className="flex items-center gap-1 mb-1">
            <BookmarkCheck size={14} className="text-yellow-600" />
            <p className="text-xs text-yellow-700 font-semibold">Bookmarked</p>
          </div>
          <p className="text-3xl font-extrabold text-yellow-600">
            {bookmarks.length}
          </p>
          <p className="text-xs text-yellow-600 mt-1">questions saved</p>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 size={16} className="text-teal-600" />
          <p className="font-bold text-gray-800">By Category</p>
        </div>
        <div className="flex flex-col gap-3">
          {CATEGORIES.map((cat) => {
            const data = scores[cat.key];
            const pct =
              data && data.total > 0
                ? Math.round((data.correct / data.total) * 100)
                : 0;
            const answered = data?.total || 0;
            return (
              <div key={cat.key}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-600">
                    {cat.label}
                  </span>
                  <span className="text-xs text-gray-400">
                    {answered > 0 ? `${pct}% (${answered} Qs)` : "Not started"}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      pct >= 80
                        ? "bg-green-500"
                        : pct >= 60
                          ? "bg-yellow-400"
                          : pct > 0
                            ? "bg-red-400"
                            : "bg-gray-200"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset */}
      {!showConfirm ? (
        <button
          type="button"
          data-ocid="progress.reset_button"
          onClick={() => setShowConfirm(true)}
          className="flex items-center justify-center gap-2 py-3 text-red-500 border border-red-200 rounded-2xl text-sm font-semibold"
        >
          <RotateCcw size={14} /> Reset All Progress
        </button>
      ) : (
        <div className="bg-red-50 rounded-2xl p-4 flex flex-col gap-3">
          <p className="text-sm font-semibold text-red-700">
            Are you sure? This will clear all progress.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              data-ocid="progress.cancel_button"
              onClick={() => setShowConfirm(false)}
              className="flex-1 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-semibold text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              data-ocid="progress.confirm_button"
              onClick={handleReset}
              className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold text-sm"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
