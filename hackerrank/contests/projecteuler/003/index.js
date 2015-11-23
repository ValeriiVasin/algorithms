'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler003

import { nextPrime } from '../../../lib/primes';
import { read } from '../../../lib/read';

const solve = (reader) => {
  let T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    let N = reader.readNumber();
    console.log(getBiggestPrime(N));
  }
};

read().then(solve);

export function getBiggestPrime(number) {
  var prime = 2;

  while (number !== 1) {
    if (number % prime === 0) {
      number = number / prime;
    } else {
      prime = nextPrime(prime);
    }
  }

  return prime;
}
