'use strict';

// https://www.hackerrank.com/challenges/service-lane

import { read } from '../../lib/read';

const solve = (reader) => {
  const [length, n] = reader.readNumbers(2);
  const road = reader.readNumbers(length);

  for (let i = 0; i < n; i += 1) {
    let [start, end] = reader.readNumbers(2);
    let way = road.slice(start, end + 1);

    console.log(Math.min(...way));
  }
};

read().then(solve);
