var assert = require('assert');

function sumDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

function sumOfSquares(n) {
  return n * (n + 1) * (2 * n + 1) / 6;
}

function _ariphmeticProgressionSum(n) {
  return (1 + n) * n / 2;
}

function squareOfSum(n) {
  return Math.pow(_ariphmeticProgressionSum(n), 2);
}

assert.equal(sumOfSquares(10), 385, 'Example: sumOfSquares');
assert.equal(squareOfSum(10), 3025, 'Example: squareOfSum');
assert.equal(sumDifference(10), 2640, 'Example');

console.log(
  sumDifference(100)
);
