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
