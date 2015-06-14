var isPrime = require('../problems/primes').isPrime;

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

function nextPrime(n) {
  do {
    n++;
  } while (!isPrime(n));

  return n;
}


console.log(
  getPrimeFactors(number)
);

module.exports = {
  nextPrime: nextPrime
};
