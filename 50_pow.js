function pow(x, n) {
  // If n is 0, return 1
  if (n === 0) return 1;

  // If n is negative, invert x and make n positive
  if (n < 0) return 1 / pow(x, -n);

  // If n is even, calculate x^(n/2) and square it
  if (n % 2 === 0) return pow(x * x, n / 2);

  // If n is odd, calculate x^((n-1)/2) and multiply it by x
  return x * pow(x, n - 1);
}

// Test the function
console.log(pow(2, 3)); // should print 8
console.log(pow(2, -3)); // should print 0.125
