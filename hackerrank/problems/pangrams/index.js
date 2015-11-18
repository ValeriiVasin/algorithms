'use strict'

// https://www.hackerrank.com/challenges/pangrams

import { read } from '../../lib/read';

const solve = (reader) => {
  for (let str of reader.readLines()) {
    console.log(isPangram(str) ? 'pangram' : 'not pangram');
  }
}

const isPangram = (str) => {
  const alphabet = new Set();

  for (let letter of str) {
    if (letter === ' ') {
      continue;
    }

    alphabet.add(letter.toLowerCase());

    if (alphabet.size === 26) {
      return true;
    }
  }

  return false;
};

read().then(solve);
