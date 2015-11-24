'use strict'

// https://www.hackerrank.com/valeriivasin
// https://www.hackerrank.com/contests/projecteuler/challenges/euler004

import { read } from '../../../lib/read';

const solve = (reader) => {
  const T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    let N = reader.readNumber();
    console.log(getLargestPalindrome(N));
  }
};

function getLargestPalindrome(n) {
  var value;
  var palindrome = 0;

  // console.time('optimal');
  for (var i = 999; i >= 100; i--) {
    if (palindrome > i * i) {
      break;
    }

    for (var j = i; j >= 100; j--) {
      value = i * j;

      if (value > palindrome && value < n && isPalindrome(value)) {
        palindrome = value;

        // other values in this loop is lower
        break;
      }
    }
  }

  return palindrome;
}

function getLargestPalindromeNonOptimal(n) {
  var palindroms = [];

  for (var i = 999; i >= 100; i--) {
    for (var j = i; j >= 100; j--) {
      var value = i * j;

      if (value >= n) {
        continue;
      }

      if (isPalindrome(value)) {
        palindroms.push(value);
      }
    }
  }

  return Math.max(...palindroms);
}

// all numbers are 3 digit
export const isPalindrome = (number) => {
  let str = String(number);

  return str === str.split('').reverse().join('');
};

read().then(solve);
