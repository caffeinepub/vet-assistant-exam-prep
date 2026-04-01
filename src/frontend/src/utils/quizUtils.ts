import type { Question } from "../backend";

// Fisher-Yates shuffle — unbiased, no sort() trick
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Returns a new Question with shuffled options and updated correctIndex.
 * This ensures answer choices appear in a different order every session.
 */
export function shuffleChoices(q: Question): Question {
  const oldCorrect = Number(q.correctIndex);
  const indices = shuffle([0, 1, 2, 3].slice(0, q.options.length));
  const newOptions = indices.map((i) => q.options[i]);
  const newCorrectIndex = indices.indexOf(oldCorrect);
  return { ...q, options: newOptions, correctIndex: BigInt(newCorrectIndex) };
}

/**
 * Build a non-repeating quiz question list:
 * 1. Shuffle the pool
 * 2. Slice to desired length (auto-cap if pool is smaller)
 * 3. Shuffle each question's choices
 */
export function buildQuiz(pool: Question[], desiredLength: number): Question[] {
  const available = shuffle(pool);
  const selected = available.slice(
    0,
    Math.min(desiredLength, available.length),
  );
  return selected.map(shuffleChoices);
}

/**
 * CVA exam category weights (must sum to 1.0).
 * radiology, surgery, and animal_medicine split the remaining ~21%.
 */
const EXAM_WEIGHTS: Record<string, number> = {
  sanitation: 0.18,
  pharmacology: 0.15,
  administration: 0.13,
  nursing: 0.13,
  laboratory: 0.11,
  legal_safety_ethics: 0.09,
  radiology: 0.07,
  surgery: 0.07,
  animal_medicine: 0.07,
};

/**
 * Build a weighted exam that mirrors the real CVA certification distribution.
 * For each category, samples `round(total * weight)` questions.
 * If a category has fewer questions than needed, uses all available.
 * Result is shuffled and choices are randomized.
 */
export function buildWeightedExam(
  pool: Question[],
  totalQuestions = 50,
): Question[] {
  const result: Question[] = [];

  for (const [category, weight] of Object.entries(EXAM_WEIGHTS)) {
    const needed = Math.round(totalQuestions * weight);
    const categoryPool = pool.filter((q) => q.category === category);
    const picked = shuffle(categoryPool).slice(
      0,
      Math.min(needed, categoryPool.length),
    );
    result.push(...picked);
  }

  // Shuffle final list and randomize each question's choices
  return shuffle(result).map(shuffleChoices);
}

/** Returns how many questions exist per CVA exam category in the pool. */
export function getCategoryCounts(pool: Question[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const cat of Object.keys(EXAM_WEIGHTS)) {
    counts[cat] = pool.filter((q) => q.category === cat).length;
  }
  return counts;
}
