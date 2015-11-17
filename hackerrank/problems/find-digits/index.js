'use strict';

// https://www.hackerrank.com/challenges/find-digits

import { read } from '../../lib/read';

const solve = (reader) => {
  const n = reader.readNumber();

  for (let i = 0; i < n; i += 1) {
    let number = reader.readNumber();

    console.log(findDigits(number));
  }
};

const findDigits = (number) => {
  let digits = String(number).split('').map(Number);

  return digits.reduce((result, digit) => {
    if (digit === 0) {
      return result;
    }

    if (number % digit === 0) {
      result += 1;
    }

    return result;
  }, 0)
}

read().then(solve);
