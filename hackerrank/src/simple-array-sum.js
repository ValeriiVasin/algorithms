// https://www.hackerrank.com/challenges/simple-array-sum

'use strict'

import { readLines } from '../lib/read';

function solve(lines) {
  const n = Number(lines[0]);
  const numbers = lines[1].split(' ').map(Number);

  console.log(sum(n, numbers));
}

export const sum = (n, numbers) => {
  return numbers.slice(0, n).reduce((a, b) => a + b);
};

readLines().then(solve);
