var assert = require('assert');
var arraySum = require('./util').arraySum;

function multiply(arr, n) {
  arr = arr.map(function(value) {
    return value * n;
  });

  return normalize(arr);
}

/**
 * Normalize digits in array after operations - proper borrowing etc
 */
function normalize(arr) {
  // prevent mutations
  arr = arr.slice(0);

  var length = arr.length;
  var borrow = 0;

  for (var i = length - 1; i >= 0; i--) {
    arr[i] += borrow;
    borrow = 0;

    if (arr[i] >= 10) {
      borrow = Math.floor(arr[i] / 10);
      arr[i] = arr[i] % 10;
    }
  }

  while (borrow) {
    arr.unshift(borrow % 10);
    borrow = Math.floor(borrow / 10);
  }

  return arr;
}

function sumOf2(pow) {
  if (pow === 0) {
    return 1;
  }

  var result = [2];
  for (var i = 2; i <= pow; i++) {
    result = multiply(result, 2);
  }

  return arraySum(result);
}

assert.deepEqual(multiply([2, 5], 2), [5, 0]);
assert.deepEqual(multiply([5, 8], 20), [1, 1, 6, 0]);
assert.deepEqual(multiply([6, 4], 2), [1, 2, 8]);

assert.equal(sumOf2(5), 5);
assert.equal(sumOf2(6), 10);
assert.equal(sumOf2(6), 10);
assert.equal(sumOf2(15), 26);

assert.equal(sumOf2(1000), 1366, 'Answer');
