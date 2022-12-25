function romanToInt(s) {
  // Create a lookup table for Roman numerals
  const lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize the result to 0
  let result = 0;

  // Iterate through the string, starting from the end
  for (let i = s.length - 1; i >= 0; i--) {
    // If the current numeral is greater than or equal to the next numeral, add it to the result
    if (i === s.length - 1 || lookup[s[i]] >= lookup[s[i + 1]]) {
      result += lookup[s[i]];
    }
    // Otherwise, subtract it from the result
    else {
      result -= lookup[s[i]];
    }
  }

  console.log(result);
}

romanToInt("MCMXCIV");
