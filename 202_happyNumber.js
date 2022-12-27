function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = [...n.toString()].reduce((sum, digit) => sum + digit ** 2, 0);
  }
  return n === 1;
}

console.log(isHappy(19));

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
