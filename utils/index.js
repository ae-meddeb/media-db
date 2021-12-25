export function shuffleArray(arr) {
  return arr
    .map((x) => [Math.random(), x])
    .sort(([a], [b]) => a - b)
    .map(([_, x]) => x);
}
