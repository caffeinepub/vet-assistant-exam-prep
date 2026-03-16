interface ScoreScreenProps {
  score: number;
  total: number;
  onRetry: () => void;
  onBack: () => void;
  backLabel?: string;
}

export default function ScoreScreen({
  score,
  total,
  onRetry,
  onBack,
  backLabel = "Back",
}: ScoreScreenProps) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
  const messages = [
    "Keep practicing! You can do it.",
    "Good start! Review the explanations.",
    "Nice work! Almost there.",
    "Excellent! You're exam ready!",
  ];
  const colorClass =
    pct >= 70
      ? "text-teal-600"
      : pct >= 50
        ? "text-yellow-500"
        : "text-red-500";

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className={`text-7xl font-extrabold ${colorClass}`}>{pct}%</div>
      <p className="text-gray-600 text-lg font-medium">
        {score} / {total} correct
      </p>
      <div className="text-3xl">
        {"★".repeat(stars)}
        {"☆".repeat(3 - stars)}
      </div>
      <p className="text-gray-500 text-sm text-center">{messages[stars]}</p>
      <div className="flex gap-3 w-full">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-4 border-2 border-teal-600 text-teal-600 rounded-2xl font-semibold text-sm"
        >
          {backLabel}
        </button>
        <button
          type="button"
          onClick={onRetry}
          className="flex-1 py-4 bg-teal-600 text-white rounded-2xl font-semibold text-sm"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
