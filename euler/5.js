var assert = require('assert');
var getPrimes = require('../problems/primes').getPrimes;

function getSmallestEvenlyDivisibleTo(n) {
  // its enough to be divisible to primes
  var primes = getPrimes(n);
  var notPrimes = getNotPrimes(n, primes);

  // min step - product of all primes
  var step = primes.reduce(function(a, b) {
    return a * b;
  });

  var number = step;
  while (!isDivisibleByAll(number, notPrimes)) {
    number += step;
  }

  return number;
}

function getNotPrimes(n, primes) {
  // get not primes
  var notPrimes = [];
  for (var i = 4; i <= n; i++) {
    if (primes.indexOf(i) === -1) {
      notPrimes.push(i);
    }
  }

  return notPrimes;
}

function isDivisibleByAll(number, divisors) {
  return divisors.every(function(divisor) {
    return number % divisor === 0;
  });
}

assert.equal(getSmallestEvenlyDivisibleTo(20), 232792560, 'Answer');
