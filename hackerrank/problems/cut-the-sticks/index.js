'use strict'

// https://www.hackerrank.com/challenges/cut-the-sticks

import { read } from '../../lib/read';

const solve = (reader) => {
  const N = reader.readNumber();
  let sticks = reader.readNumbers(N);

  while (sticks.length) {
    console.log(sticks.length);
    sticks = cut(sticks);
  }
};

const cut = (sticks) => {
  let min = Math.min(...sticks);

  return sticks.reduce((arr, stick) => {
    if (stick > min) {
      arr.push(stick - min);
    }

    return arr;
  }, []);
};

read().then(solve);
