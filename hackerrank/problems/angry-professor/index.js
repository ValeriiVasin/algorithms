'use strict'

// https://www.hackerrank.com/challenges/angry-professor

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();
  for (let i = 0; i < T; i++) {
    const [N, K] = reader.readNumbers(2);
    const arrivals = reader.readNumbers(N);

    const studentsInTime = arrivals.reduce((count, b) => {
      if (b <= 0) {
        count += 1;
      }

      return count;
    }, 0);

    console.log(studentsInTime < K ? 'YES' : 'NO');
  }
};

read().then(solve);
