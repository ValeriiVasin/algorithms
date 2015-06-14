/**
 * http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
function getPrimes(n) {
  var primes = new Array(n + 1);
  var i, j, step;

  for (i = 2; i <= n; i += 1) {
    primes[i] = i;
  }

  for (i = 2; i * i <= n; i += 1) {
    if (!primes[i]) {
      continue;
    }

    step = i === 2 ? 2 : 2 * i;
    for (j = i * i; j <= n; j += step) {
      primes[j] = false;
    }
  }

  return primes.filter(Boolean);
}

// https://en.wikipedia.org/wiki/Primality_test
function isPrime(n) {
  if (n <= 3) {
    return n > 1;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (var i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function nextPrime(n) {
  do {
    n++;
  } while (!isPrime(n));

  return n;
}

module.exports = {
  getPrimes: getPrimes,
  isPrime: isPrime,
  nextPrime: nextPrime
}
