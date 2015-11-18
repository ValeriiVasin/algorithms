'use strict'

// https://www.hackerrank.com/challenges/bus-station

import { read } from '../../lib/read';

const solve = (reader) => {
  const n = reader.readNumber();
  const groups = reader.readNumbers(n);

  let total = groups.reduce((a, b) => a + b);
  let sizes = [];

  // size only could be equal the sum of first "i" groups. Because they should travel in order
  let size = 0;

  for (let group of groups) {
    size += group;

    if (total % size !== 0) {
      continue;
    }

    if (isBusSizeFine(groups, size)) {
      sizes.push(size);
    }
  }

  console.log(sizes.join(' '));
}

const isBusSizeFine = (groups, size) => {
  let inside = 0;

  for (let group of groups) {
    inside += group;

    if (inside > size) {
      return false;
    }

    if (inside === size) {
      inside = 0;
    }
  }

  return inside === 0;
};

read().then(solve);
