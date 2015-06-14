var getPrimes = require('../problems/primes').getPrimes;

function getSmallestEvenlyDevisibleTo(n) {
  // its enough to be devisible to primes
  var primes = getPrimes(n);
  var notPrimes = getNotPrimes(n, primes);

  // min step - product of all primes
  var step = primes.reduce(function(a, b) {
    return a * b;
  });

  var number = step;
  while (!isDevisibleByAll(number, notPrimes)) {
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

function isDevisibleByAll(number, devisors) {
  return devisors.every(function(devisor) {
    return number % devisor === 0;
  });
}

console.time('time');
var result = getSmallestEvenlyDevisibleTo(20);
console.timeEnd('time');
console.log(result);
