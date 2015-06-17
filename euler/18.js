 var assert = require('assert');

var numbers = [
'75',
'95 64',
'17 47 82',
'18 35 87 10',
'20 04 82 47 65',
'19 01 23 75 03 34',
'88 02 77 73 07 63 67',
'99 65 04 28 06 16 70 92',
'41 41 26 56 83 40 80 70 33',
'41 48 72 33 47 32 37 16 94 29',
'53 71 44 65 25 43 91 52 97 51 14',
'70 11 33 28 77 73 17 78 39 68 17 57',
'91 71 52 38 17 14 91 43 58 50 27 29 48',
'63 66 04 68 89 53 67 30 73 16 69 87 40 31',
'04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'
].map(function(row) {
  return row.split(' ').map(Number);
});

var fixtureNumbers = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

function getSum(arr, i, j, cache) {
  var value = arr[i][j];

  if (i === 0 && j === 0) {
    return value;
  }

  cache = cache || {};
  var cacheKey = i + ':' + j;
  if (getSum[cacheKey]) {
    return getSum[cacheKey];
  }

  // i-th row length
  var length = i + 1;

  // first
  if (j === 0) {
    cache[cacheKey] = value + getSum(arr, i - 1, 0, cache);
    return cache[cacheKey];
  }

  // last
  if (j === length - 1) {
    cache[cacheKey] = value + getSum(arr, i - 1, i - 1, cache);
    return cache[cacheKey];
  }

  // max parents sum
  cache[cacheKey] = value + Math.max(
    getSum(arr, i - 1, j - 1, cache),
    getSum(arr, i - 1, j, cache)
  );

  return cache[cacheKey];
}

function maxSequenceSum(arr) {
  var i = arr.length - 1;
  var cache = {};
  var sums = arr[i].map(function(value, index) {
    return getSum(arr, i, index, cache);
  });

  return Math.max.apply(Math, sums);
}

assert.equal(getSum(fixtureNumbers, 0, 0), 3);
assert.equal(getSum(fixtureNumbers, 1, 0), 10);
assert.equal(getSum(fixtureNumbers, 1, 1), 7);
assert.equal(getSum(fixtureNumbers, 2, 0), 12);
assert.equal(maxSequenceSum(fixtureNumbers), 23);
assert.equal(maxSequenceSum(numbers), 1074, 'Answer');

module.exports = {
  maxSequenceSum: maxSequenceSum
};
