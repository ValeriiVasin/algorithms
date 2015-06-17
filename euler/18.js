var assert = require('assert');
var readFixture = require('./util').readFixture;

function parse(content) {
  return content.trim().split('\n').map(function(row) {
    return row.split(' ').map(Number);
  });
}

var numbers = parse(readFixture('18.txt'));

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
  parse: parse,
  maxSequenceSum: maxSequenceSum
};
