var assert = require('assert');

function sqrt(n, precision) {
  return _sqrt(1, n, precision);
}

function _sqrt(value, n, precision) {
  if (goodEnough(value * value, n, precision)) {
    return value;
  }

  return _sqrt(average(value, n / value), n, precision);
}

function average(a, b) {
  return (a + b) / 2;
}

function goodEnough(a, b, precision) {
  return Math.abs(a - b) <= precision;
}

assert.equal(sqrt(36, 0.000000001), 6);
