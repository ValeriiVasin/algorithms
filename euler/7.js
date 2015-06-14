var nextPrime = require('./3').nextPrime;

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

console.log(
  nthPrime(10001)
);
