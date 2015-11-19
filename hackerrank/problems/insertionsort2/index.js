'use strict'

// https://www.hackerrank.com/challenges/insertionsort2

import { read } from '../../lib/read';

const solve = (reader) => {
  const n = reader.readNumber();
  const arr = reader.readNumbers(n);

  for (let i = 1, length = arr.length; i < length; i++) {
    insert(arr, i);
    console.log(arr.join(' '));
  }
}

const insert = (arr, i) => {
  let value = arr[i];
  while (i > 0 && arr[i - 1] > value) {
    arr[i] = arr[i - 1];
    i -= 1;
  }

  arr[i] = value;
};

read().then(solve);
