// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};

console.log(mySqrt(8));
