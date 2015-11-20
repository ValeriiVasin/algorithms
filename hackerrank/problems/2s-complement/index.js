'use strict'

// https://www.hackerrank.com/challenges/2s-complement

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  let ranges = [];
  for (let i = 0; i < T; i++) {
    let [start, end] = reader.readNumbers(2);
    // ranges.push({ start, end });
    console.log(diff(start, end, 32));
  }
}

const _solveWithRanges = (ranges) => {
  let realRangesMap = getRealRangesMap(ranges);

  for (let range of ranges) {
    let { start, end } = range;

    if (start === end) {
      console.log(amountOfOnes(start, end));
    }

    let result = 0;

    /**
     * If range contains few sub-ranges - inner ranges points will be calculated twice, because range is inclusive
     * That is why overlapping variable is used
     */
    let overlap = 0;
    while (start !== end) {
      let _end = realRangesMap.get(start);
      result -= overlap;
      result += amountOfOnes(start, _end);
      overlap = amountOfOnesInNumber(_end);
      start = _end;
    }
    console.log(result);
  }
};

/**
 * Get ranges uniq ranges that is supposed to be processed
 * [-3, 3], [-1, 1] => [-3, -1], [-1, 1], [1, 3]
 *
 */
export const getRealRanges = (ranges) => {
  let dots = new Set();

  for (let range of ranges) {
    dots.add(range.start).add(range.end);
  }

  // sort ranges by start date
  let sortedRanges = [...ranges].sort((a, b) => a.start - b.start);
  let sortedDots = [...dots].sort((a, b) => a - b);

  // find real ranges
  let realRanges = [];

  for (let i = 0; i < sortedDots.length - 1; i++) {
    let range = { start: sortedDots[i], end: sortedDots[i + 1] };

    if (isRangeUsed(range, sortedRanges)) {
      realRanges.push(range);
    }
  }

  return realRanges;
};

export const getRealRangesMap = (ranges) => {
  let map = new Map();

  for (let range of getRealRanges(ranges)) {
    map.set(range.start, range.end);
  }

  return map;
};

const isRangeUsed = (range, sortedRanges) => {
  for (let _range of sortedRanges) {
    if (_range.start > range.start) {
      return false;
    }

    if (_range.start <= range.start && _range.end >= range.end) {
      return true;
    }
  }
};

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

let rangeCache = new Map();
export const amountOfOnes = (start, end) => {
  let key = `${start}:${end}`;

  if (rangeCache.has(key)) {
    return rangeCache.get(key);
  }

  let result = 0;

  for (let i = start; i <= end; i++) {
    result += amountOfOnesInNumber(i);
  }

  rangeCache.set(key, result);

  return result;
};

let cache = new Map();
const amountOfOnesInNumber = (number) => {
  if (cache.has(number)) {
    return cache.get(number);
  }

  let binary = toComplement(number, 32);
  console.log(binary);
  let result = 0;

  for (let letter of binary) {
    if (letter === '1') {
      result += 1;
    }
  }

  cache.set(number, result);

  return result;
};

//
// NEW STUFF!
//
const _bitsNeeded = (n) => {
  let bits = 0;

  while (n) {
    bits++;
    n >>= 1;
  }

  return bits;
}

// amount of ones that are used in a range [0..n]
export const onesFromZero = (n) => {
  let bits = _bitsNeeded(n);

  // for zero-variang
  n += 1;

  // whole cycle length (after how many cycles it will repeat)
  // for first bit its = 2, second - 4 etc
  // its power of 2 for bit shifts
  let cycle = 2;

  // sum
  let sum = 0;
  while (bits) {
    let frequency = cycle / 2;

    // whole cycle repeated times
    let full = Math.floor(n / cycle);

    // reminder from cycle repeats
    let reminder = n % cycle;


    let bitChanges = (full * frequency) +
                     (reminder > frequency ? reminder - frequency : 0);

    sum += bitChanges;
    cycle *= 2;
    bits -= 1;
  }

  return sum;
}

/**
 * Get amount of "1" needed for positive range: 0 <= start <= end
 */
export const diffFromZero = (start, end) => {
  return onesFromZero(end) - onesFromZero(start === 0 ? 0 : start - 1);
};

/**
 * Get amount of "1" needed for negative range: -MAX <= start <= end <= -1
 */
export const onesFromMinimum = (n, bits) => {
  let min = -Math.pow(2, bits - 1);

  if (n <= -1) {
    // get positive diff
    let diff = n - min;

    // every negative number starts from "1" - minus sign
    let onesFromMinuses = diff + 1;

    return onesFromMinuses + onesFromZero(diff);
  }

  return onesFromMinimum(-1, bits) + onesFromZero(n);
}

// amount of ones needed for the range
export const diff = (start, end, bits) => {
  if (start >= 0) {
    return diffFromZero(start, end);
  }

  let min = -Math.pow(2, bits - 1);

  if (start === min) {
    return onesFromMinimum(end, bits);
  }

  return onesFromMinimum(end, bits) - onesFromMinimum(start - 1, bits);
}

read().then(solve);
