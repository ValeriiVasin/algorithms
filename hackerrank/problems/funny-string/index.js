'use strict'

// https://www.hackerrank.com/challenges/funny-string

import { read } from '../../lib/read';

const solve = (reader) => {
  const n = reader.readNumber();

  for (let i = 0; i < n; i += 1) {
    let str = reader.readLine();
    console.log(isFunny(str) ? 'Funny' : 'Not Funny');
  }
}

const isFunny = (str) => {
  const length = str.length;

  if (length === 2) {
    return true;
  }

  for (let i = 1; i < Math.floor(length / 2) + 1; i += 1) {
    let firstDiff = Math.abs(str.charCodeAt(i) - str.charCodeAt(i - 1));
    let lastDiff = Math.abs(str.charCodeAt(length - i - 1) - str.charCodeAt(length - i));

    if (firstDiff !== lastDiff) {
      return false;
    }
  }

  return true;
};

read().then(solve);
