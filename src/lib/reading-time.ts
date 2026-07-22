export function calculateReadingTime(content: string): number {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const wordsPerMinute = 200;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}