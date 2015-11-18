'use strict'

// https://www.hackerrank.com/challenges/halloween-party

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i += 1) {
    let K = reader.readNumber();

    let verticalCuts = Math.floor(K / 2);
    let horizontalCuts = K - verticalCuts;

    console.log(verticalCuts * horizontalCuts);
  }
}

read().then(solve);
