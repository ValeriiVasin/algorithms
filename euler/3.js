var assert = require('assert');

var isPrime = require('../problems/primes').isPrime;
var nextPrime = require('../problems/primes').nextPrime;

var number = 600851475143;

function getPrimeFactors(number) {
  var prime = 2;
  var primeFactors = [];

  while (number !== 1) {
    if (number % prime === 0) {
      primeFactors.push(prime);
      number = number / prime;
    } else {
      prime = nextPrime(prime);
    }
  }

  return primeFactors;
}

assert.equal(getPrimeFactors(number).pop(), 6857, 'Answer');

module.exports = {
  getPrimeFactors: getPrimeFactors
};
