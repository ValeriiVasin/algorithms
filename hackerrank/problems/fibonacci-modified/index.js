'use strict'

// https://www.hackerrank.com/challenges/fibonacci-modified

import { read } from '../../lib/read';
import { BigInt } from '../../lib/bigint';

const solve = (reader) => {
  let [prev, current, n] = reader.readNumbers(3);

  current = BigInt.from(current);
  prev = BigInt.from(prev);

  for (let i = 3; i <= n; i++) {
    [prev, current] = [current, current.pow(2).add(prev)];
  }

  console.log(current.toString());
}

const numberToString = (n) => {
  if (n === 0) {
    return '0';
  }

  let result = '';

  while (n) {
    result = String(n % 10) + result;
    n = Math.floor(n / 10);
  }

  return result;
};

read().then(solve);
