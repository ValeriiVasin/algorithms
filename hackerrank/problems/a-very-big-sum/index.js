'use strict';

// https://www.hackerrank.com/challenges/a-very-big-sum

import { readLines } from '../../lib/read';

const solve = (lines) => {
  let result = lines[1].split(' ').reduce((a, b) => Number(a) + Number(b))

  console.log(result);
};

readLines().then(solve);
