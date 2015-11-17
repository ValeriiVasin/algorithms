'use strict';

// https://www.hackerrank.com/challenges/a-very-big-sum

import { read } from '../../lib/read';

const solve = (reader) => {
  let n = reader.readNumber();
  let numbers = reader.readNumbers(n);
  let result = numbers.reduce((a, b) => Number(a) + Number(b))

  console.log(result);
};

read().then(solve);
