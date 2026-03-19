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
