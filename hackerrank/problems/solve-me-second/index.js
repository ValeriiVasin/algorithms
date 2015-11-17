// https://www.hackerrank.com/challenges/solve-me-second

'use strict';

import { read } from '../../lib/read';

const solve = (reader) => {
  let n = reader.readNumber();

  for (let i = 0; i < n; i += 1) {
    let numbers = reader.readNumbers();

    console.log(numbers.reduce((a, b) => a + b));
  }
};

read().then(solve);
