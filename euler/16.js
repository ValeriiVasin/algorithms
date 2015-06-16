var assert = require('assert');
var arraySum = require('./util').arraySum;
var multiply = require('./util').multiply;

function sumOf2(pow) {
  if (pow === 0) {
    return 1;
  }

  var result = [2];
  for (var i = 2; i <= pow; i++) {
    result = multiply(result, 2);
  }

  return arraySum(result);
}

assert.equal(sumOf2(5), 5);
assert.equal(sumOf2(6), 10);
assert.equal(sumOf2(6), 10);
assert.equal(sumOf2(15), 26);

assert.equal(sumOf2(1000), 1366, 'Answer');
