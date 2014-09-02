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
    if ( !primes[i] ) {
      continue;
    }

    step = i === 2 ? 2 : 2 * i;
    for (j = i * i; j <= n; j += step) {
      primes[j] = false;
    }
  }

  return primes.filter(Boolean);
}

console.log(
  getPrimes(100)
);
