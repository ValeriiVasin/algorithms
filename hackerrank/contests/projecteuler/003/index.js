'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler003

import { nextPrime } from '../../../lib/primes';
import { read } from '../../../lib/read';

const solve = (reader) => {
  let T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    let N = reader.readNumber();
    console.log(getPrimeFactors(N));
  }
};

read().then(solve);


export function getPrimeFactors(number) {
  var prime = 2;
  var primeFactors = [];

  while (number !== 1) {
    if (number % prime === 0) {
      primeFactors.push(prime);
      number = number / prime;
    } else {
      prime = nextPrime(prime);
    }
  }

  return primeFactors.pop();
}
