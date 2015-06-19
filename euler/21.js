var assert = require('assert');
var arraySum = require('./util').arraySum;

function getDivisors(n) {
  var i = 2;
  var sqrtN = Math.sqrt(n);
  var result = [1];

  while (i <= sqrtN) {
    if (n % i === 0) {
      result.push(i);

      if (i !== (n / i)) {
        result.push(n / i);
      }
    }

    i++;
  }

  return result;
}

function sumOfDivisors(number) {
  return arraySum(getDivisors(number));
}

function isAmicable(a) {
  var b = sumOfDivisors(a);

  if (a === b) {
    return false;
  }

  return sumOfDivisors(b) === a;
}

function sumOfAmicables(max) {
  var amicables = [];

  for (var i = 1; i < max; i++) {
    if (isAmicable(i)) {
      amicables.push(i);
    }
  }

  return arraySum(amicables);
}

assert.equal(sumOfDivisors(220), 284);
assert.equal(sumOfDivisors(284), 220);
assert.equal(sumOfAmicables(10000), 31626, 'Answer');

module.exports = {
  getDivisors: getDivisors,
  sumOfDivisors: sumOfDivisors
};
