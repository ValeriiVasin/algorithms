'use strict'

// https://www.hackerrank.com/challenges/the-love-letter-mystery

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    console.log(operationsTillPalindrome(reader.readLine()));
  }
};

const operationsTillPalindrome = (str) => {
  let length = str.length;
  let middle = Math.floor(length / 2);

  let operations = 0;
  for (let i = 0; i < middle; i++) {
    operations += Math.abs(str.charCodeAt(i) - str.charCodeAt(length - i - 1));
  }

  return operations;
};

read().then(solve);
