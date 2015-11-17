'use strict';

// https://www.hackerrank.com/challenges/utopian-tree

import { read } from '../../lib/read';

const solve = (reader) => {
  let n = reader.readNumber();

  for (let i = 0; i < n; i += 1) {
    let cycles = reader.readNumber();
    console.log(utopianTreeHeight(cycles));
  }
};

const utopianTreeHeight = (n) => {
  let height = 1;

  for (let i = 0; i < n; i += 1) {
    height = i % 2 === 0 ? height * 2 : height + 1;
  }

  return height;
};

read().then(solve);
