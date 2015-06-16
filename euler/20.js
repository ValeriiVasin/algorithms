var assert = require('assert');

var multiply = require('./util').multiply;
var arraySum = require('./util').arraySum;

function factorialDigitSum(n) {
  if (n === 1) {
    return 1;
  }

  var result = [1];
  for (var i = 2; i <= n; i++) {
    result = multiply(result, i);
  }

  return arraySum(result);
}

assert.equal(factorialDigitSum(10), 27);
assert.equal(factorialDigitSum(100), 648);
