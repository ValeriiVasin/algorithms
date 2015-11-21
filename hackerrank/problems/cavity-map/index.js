'use strict'

// https://www.hackerrank.com/challenges/cavity-map

import { read } from '../../lib/read';

const solve = (reader) => {
  const N = reader.readNumber();

  const map = [];
  for (let i = 0; i < N; i++) {
    map.push(reader.readNumbers(N, ''));
  }

  const cavities = map.map((row) => [...row]);

  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      let value = map[i][j];

      let left = map[i][j - 1];
      let top = map[i - 1][j];
      let right = map[i][j + 1];
      let bottom = map[i + 1][j];

      if (value > top && value > bottom && value > left && value > right) {
        cavities[i][j] = 'X';
      }
    }
  }

  for (let row of cavities) {
    console.log(row.join(''));
  }
};

read().then(solve);
