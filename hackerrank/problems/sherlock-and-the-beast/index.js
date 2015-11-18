'use strict'

// https://www.hackerrank.com/challenges/sherlock-and-the-beast

import { read } from '../../lib/read';

const solve = (reader) => {
  let n = reader.readNumber();

  for (let i = 0; i < n; i += 1) {
    let digits = reader.readNumber();
    console.log(getDecentNumber(digits));
  }
}

const getDecentNumber = (digits) => {
  let fives = digits - (digits % 3);

  for (let i = fives; i >= 0; i -= 3) {
    let threes = digits - i;

    if (threes % 5 === 0) {
      return `${'5'.repeat(i)}${'3'.repeat(threes)}`;
    }
  }

  return -1;
};

read().then(solve);
