var assert = require('assert');
var BigNum = require('./util/big_num').BigNum;

function firstContainsAmountOfDigits(n) {
  var prev = new BigNum(1);
  var current = new BigNum(1);
  var temp;
  var index = 2;

  do {
    temp = prev;
    prev = current;
    current = current.add(temp);
    index++;
  } while (current.length() < n);

  return index;
}

assert.equal(firstContainsAmountOfDigits(3), 12);
assert.equal(firstContainsAmountOfDigits(1000), 4782);
