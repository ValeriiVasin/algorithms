'use strict'

// https://www.hackerrank.com/challenges/library-fine

import { read } from '../../lib/read';

const solve = (reader) => {
  let [returnDay, returnMonth, returnYear] = reader.readNumbers(3);
  let [expectedDay, expectedMonth, expectedYear] = reader.readNumbers(3);

  let returnDate = new Date(returnYear, returnMonth - 1, returnDay);
  let expectedDate = new Date(expectedYear, expectedMonth - 1, expectedDay);

  // returned in time
  if (returnDate <= expectedDate) {
    console.log(0);
    return;
  }

  if (returnYear > expectedYear) {
    console.log(10000);
    return;
  }

  if (returnMonth > expectedMonth) {
    console.log((returnMonth - expectedMonth) * 500);
    return;
  }

  console.log((returnDay - expectedDay) * 15);
};

read().then(solve);
