var assert = require('assert');
var sumOfDivisors = require('./21').sumOfDivisors;

var MAX = 28123;

function isAbundant(n) {
  return sumOfDivisors(n) > n;
}

function getAbundants() {
  var result = [];

  for (var i = 12; i <= MAX; i++) {
    if (isAbundant(i)) {
      result.push(i);
    }
  }

  return result;
}

function createCache() {
  var cache = {};
  var abundants = getAbundants();
  var length = abundants.length;

  for (var i = 0; i < length; i++) {
    for (var j = i; j < length; j++) {
      cache[abundants[i] + abundants[j]] = true;
    }
  }

  return cache;
}

function getSum() {
  var sum = 0;
  var cache = createCache();

  for (var i = 1; i <= MAX; i++) {
    if (!cache[i]) {
      sum += i;
    }
  }

  return sum;
}

assert.equal(sumOfDivisors(28), 28);
assert.equal(isAbundant(12), true);

assert.equal(getSum(), 4179871, 'Answer');
