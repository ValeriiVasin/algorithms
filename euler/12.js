var assert = require('assert');
var getPrimeFactors = require('./3').getPrimeFactors;

function nthTriangle(n) {
  return (1 + n) * n / 2;
}

/**
 * http://mathforum.org/library/drmath/view/55843.html
 */
function getNumberOfDivisors(number) {
  if (number === 1) {
    return 1;
  }

  var primeFactors = getPrimeFactors(number);
  var previous, count;
  var result = primeFactors.reduce(function(product, prime) {
    if (prime === previous) {
      count++;
    } else {
      // skip initial
      if (count) {
        product *= count;
      }

      // not-used + used once
      count = 2;
      previous = prime;
    }

    return product;
  }, 1);

  // count for last divisor
  result *= count;

  return result;
}

function getFirstTriangleWithDivisorsMoreThen(n) {
  var i = 0;
  var triangleNumber, divisorsNumber;

  do {
    i++;
    triangleNumber = nthTriangle(i);
    divisorsNumber = getNumberOfDivisors(triangleNumber);
  } while (divisorsNumber <= n);

  return triangleNumber;
}

assert.equal(nthTriangle(7), 28, 'nthTriangle');
assert.equal(getNumberOfDivisors(28), 6, 'getNumberOfDivisors');
assert.equal(getFirstTriangleWithDivisorsMoreThen(5), 28);

assert.equal(getFirstTriangleWithDivisorsMoreThen(500), 76576500, 'Answer');

