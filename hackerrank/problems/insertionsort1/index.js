'use strict'

// https://www.hackerrank.com/challenges/insertionsort1

import { read } from '../../lib/read';

const solve = (reader) => {
  const n = reader.readNumber();
  const arr = reader.readNumbers(n);

  let i = n - 1;
  let value = arr[i];
  while (i > 0 && arr[i - 1] > value) {
    arr[i] = arr[i - 1];
    i -= 1;
    printArray(arr);
  }

  if (i !== n - 1) {
    arr[i] = value;
    printArray(arr);
  }
}

const printArray = (arr) => console.log(arr.join(' '));

read().then(solve);
