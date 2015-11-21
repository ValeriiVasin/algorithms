'use strict'

// https://www.hackerrank.com/challenges/two-strings

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    let a = reader.readLine();
    let b = reader.readLine();

    console.log(hasCommonSubstring(a, b) ? 'YES' : 'NO');
  }
};

const hasCommonSubstring = (a, b) => {
  const aSet = new Set(a);

  for (let letter of b) {
    if (aSet.has(letter)) {
      return true;
    }
  }

  return false;
};

read().then(solve);
