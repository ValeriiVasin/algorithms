// https://www.hackerrank.com/challenges/simple-array-sum

'use strict'

import { read } from '../../lib/read';

function solve(reader) {
  const n = reader.readNumber();
  const numbers = reader.readNumbers();

  console.log(sum(n, numbers));
}

export const sum = (n, numbers) => {
  return numbers.slice(0, n).reduce((a, b) => a + b);
};

read().then(solve);
