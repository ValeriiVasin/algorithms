'use strict'

// https://www.hackerrank.com/challenges/extra-long-factorials

import { read } from '../../lib/read';
import { BigInt } from '../../lib/bigint';

const solve = (reader) => {
  const N = reader.readNumber();
  let factorial = BigInt.from(1);

  for (let i = 2; i <= N; i++) {
    factorial = factorial.multiply(i);
  }

  console.log(factorial.toString());
};

read().then(solve);
