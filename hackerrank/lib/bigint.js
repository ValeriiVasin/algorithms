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

  // remove leading zeros
  while (arr[0] === 0) {
    arr.shift();
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

    let maxLength = Math.max(this._value.length, value.length);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
      let a = value[value.length - 1 - i] || 0;
      let b = this._value[this._value.length - 1 - i] || 0;

      result.unshift(a + b);
    }

    return new BigInt(
      _normalize(result)
    );
  }

  multiply(value) {
    let a = this._value;
    let b = _toBigInt(value);

    // result length (number of digits)
    let length = a.length + b.length;
    let result = new Array(length).fill(0);

    for (let i = 0, aLength = a.length; i < aLength; i++) {
      let iLast = aLength - 1 - i;

      for (let j = 0, bLength = b.length; j < bLength; j++) {
        let jLast = bLength - j - 1;

        result[length - 1 - i - j] += a[iLast] * b[jLast];
      }
    }

    return new BigInt(
      _normalize(result)
    );
  }

  pow(n) {
    if (n === 0) {
      return BigInt.from(1);
    }

    let value = BigInt.from(this);

    for (let i = 1; i < n; i++) {
      value = value.multiply(this);
    }

    return value;
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
