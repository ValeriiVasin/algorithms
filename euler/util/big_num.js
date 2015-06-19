var assert = require('assert');

function BigNum(value) {
  this._value = toBigNum(value);
}

BigNum.prototype.value = function() {
  return this._value.slice(0);
};

BigNum.prototype.add = function(value) {
  value = toBigNum(value);

  var valueLength = value.length;
  var thisValueLength = this._value.length;
  var length = Math.max(valueLength, thisValueLength);
  var result = [];

  var valueIndex;
  var thisValueIndex;

  for (var i = 0; i < length; i++) {
    valueIndex = valueLength - i - 1;
    thisValueIndex = thisValueLength - i - 1;

    result.unshift(
      (this._value[thisValueIndex] || 0) + (value[valueIndex] || 0)
    );
  }

  return new BigNum(
    _normalize(result)
  );
};

BigNum.prototype.toString = function() {
  return this._value.join('');
};

BigNum.prototype.length = function() {
  return this._value.length;
};

function toBigNum(n) {
  if (n instanceof BigNum) {
    return n.value();
  }

  if (Array.isArray(n)) {
    return n.slice(0);
  }

  if (typeof n === 'number') {
    n = n.toString();
  }

  return n.split('').map(Number);
}

/**
 * Normalize digits in array after operations - proper borrowing etc
 */
function _normalize(arr) {
  // prevent mutations
  arr = arr.slice(0);

  var length = arr.length;
  var borrow = 0;

  for (var i = length - 1; i >= 0; i--) {
    arr[i] += borrow;
    borrow = 0;

    if (arr[i] >= 10) {
      borrow = Math.floor(arr[i] / 10);
      arr[i] = arr[i] % 10;
    }
  }

  while (borrow) {
    arr.unshift(borrow % 10);
    borrow = Math.floor(borrow / 10);
  }

  return arr;
}

var a = new BigNum(5);
assert.equal(a.add(3).toString(), '8');
assert.equal(a.add(198).toString(), '203');

module.exports = {
  BigNum: BigNum
};
