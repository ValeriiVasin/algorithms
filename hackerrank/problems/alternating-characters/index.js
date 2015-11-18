'use strict'

// https://www.hackerrank.com/challenges/alternating-characters

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let str of reader.readLines()) {
    console.log(getDeletionsCount(str));
  }
}

const getDeletionsCount = (str) => {
  let result = 0;
  let prevLetter;

  for (let letter of str) {
    if (letter === prevLetter) {
      result += 1;
    }

    prevLetter = letter;
  }

  return result;
};

read().then(solve);
