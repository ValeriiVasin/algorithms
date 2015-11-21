'use strict'

// https://www.hackerrank.com/challenges/palindrome-index

import { read } from '../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    console.log(getPalindromeIndex(reader.readLine()));
  }
};

const getPalindromeIndex = (str) => {
  let length = str.length;

  if (isPalindrome(str)) {
    return -1;
  }

  for (let iStart = 0, mid = Math.floor(length / 2); iStart < mid; iStart++) {
    let iEnd = length - 1 - iStart;

    if (str.charAt(iStart) === str.charAt(iEnd)) {
      continue;
    }

    // check without iStart
    if (isPalindrome(without(str, iStart))) {
      return iStart;
    } else {
      return iEnd;
    }
  }

  return -1;
};

const isPalindrome = (str) => str === str.split('').reverse().join('');

const without = (str, index) => {
  return str.slice(0, index) + str.slice(index + 1);
}

read().then(solve);
