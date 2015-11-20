'use strict'

// https://www.hackerrank.com/challenges/2s-complement

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    let [start, end] = reader.readNumbers(2);
    console.log(amountOfOnes(start, end));
  }
}

/**
 * Convert number to two's-complement representation
 * @param  {Number} n    Number to convert (integer)
 * @param  {Number} bits Amount of bits to use
 * @return {String}      Converted representation
 */
export const toComplement = (n, bits) => {
  if (n >= 0) {
    let value = n.toString(2);

    return '0'.repeat(bits - value.length) + value;
  }

  let positive = toComplement(Math.abs(n), bits);
  let negated = negate(positive);
  let firstZeroFromEndPosition = negated.lastIndexOf('0');
  let result = negated.slice(0, firstZeroFromEndPosition) + negate(negated.slice(firstZeroFromEndPosition));

  return result;
};

/**
 * negate string - replace 0 with 1 and 1 with 0
 * @param  {String} str Binary number representation string
 * @return {String}     Negated binary number string
 */
const negate = (str) => {
  let negated = '';

  for (let letter of str) {
    negated += letter === '0' ? '1' : '0';
  }

  return negated;
}

const amountOfOnes = (start, end) => {
  let result = 0;

  for (let i = start; i <= end; i++) {
    result += amountOfOnesInNumber(i);
  }

  return result;
};

let cache = new Map();
const amountOfOnesInNumber = (number) => {
  if (cache.has(number)) {
    return cache.get(number);
  }

  let binary = toComplement(number, 32);
  let result = 0;

  for (let letter of binary) {
    if (letter === '1') {
      result += 1;
    }
  }

  cache.set(number, result);

  return result;
};

read().then(solve);
