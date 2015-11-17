// https://www.hackerrank.com/challenges/solve-me-second

'use strict';

import { readLines } from '../lib/read';

const solve = (lines) => {
  let n = Number(lines[0].trim());

  for (let line of lines.slice(1)) {
    let numbers = line.trim().split(' ').map(Number);

    console.log(numbers[0] + numbers[1]);
  }
};

readLines().then(solve);
