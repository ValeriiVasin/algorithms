var assert = require('assert');
var nextPrime = require('../problems/primes').nextPrime;

function nthPrime(n) {
  if (n === 1) {
    return 2;
  }

  var prime = 2;
  for (var i = 2; i <= n; i++) {
    prime = nextPrime(prime);
  }

  return prime;
}

assert.equal(nthPrime(10001), 104743, 'Answer');
