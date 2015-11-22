'use strict'

// https://www.hackerrank.com/challenges/sherlock-and-valid-string

import { read } from '../../lib/read';

const solve = (reader) => {
  for (let str of reader.readLines()) {
    console.log(couldBeConvertedToValid(str) ? 'YES' : 'NO');
  }
};

export const couldBeConvertedToValid = (str) => {
  if (str.length === 1) {
    return true;
  }

  let map = new Map();

  for (let letter of str) {
    map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
  }

  let sum = 0;
  let min = str.length + 1;
  let max = 0;
  let minCount = 0;
  let maxCount = 0;

  for (let [letter, count] of map) {
    sum += count;

    if (count === min) {
      minCount++;
    }

    if (count === max) {
      maxCount++;
    }

    if (count < min) {
      min = count;
      minCount = 1;
    }

    if (count > max) {
      max = count;
      maxCount = 1;
    }
  }

  if (min === max) {
    // string is already valid
    return true;
  }

  let size = map.size;

  // e.g. aaabbbcccd
  // Notice: this check should be before minCount check
  if (maxCount === size - 1) {
    return min === 1;
  }

  // e.g. abcddd
  if (minCount === size - 1) {
    return max - 1 === min;
  }

  return false;
};

read().then(solve);
