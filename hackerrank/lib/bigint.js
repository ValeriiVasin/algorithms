'use strict';

/**
 * Normalize digits in array after operations - proper borrowing etc
 */
const _normalize = (arr) => {
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

/**
 * Convert value to array of Numbers
 * @param  {BigInt|Array<Number>|String} n Convert value to BigInt
 * @return {Number}   Array of numbers
 */
const _toBigInt = (value) => {
  if (value instanceof BigInt) {
    return value.value();
  }

  if (Array.isArray(value)) {
    return value.slice(0);
  }

  if (typeof value === 'number') {
    value = value.toString();
  }

  return value.split('').map(Number);
}

export class BigInt {
  constructor(value) {
    this._value = _toBigInt(value);
  }

  add(value) {
    value = _toBigInt(value);

    let valueLength = value.length;
    let thisValueLength = this._value.length;
    let length = Math.max(valueLength, thisValueLength);
    let result = [];

    for (let i = 0; i < length; i++) {
      let valueIndex = valueLength - i - 1;
      let thisValueIndex = thisValueLength - i - 1;

      result[length - i - 1] = (this._value[thisValueIndex] || 0) + (value[valueIndex] || 0)
    }

    return new BigInt(
      _normalize(result)
    );
  }

  value() {
    return this._value.slice(0);
  }

  toString() {
    return this._value.join('');
  }

  length() {
    return this._value.length;
  }
}

BigInt.from = (number) => new BigInt(number);
