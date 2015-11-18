'use strict'

// https://www.hackerrank.com/challenges/diagonal-difference

import { read } from '../../lib/read';

const solve = (reader) => {
  const n = reader.readNumber();
  const matrix = [];

  for (let i = 0; i < n; i += 1) {
    matrix.push(reader.readNumbers(n));
  }

  console.log(diagonalDifference(n, matrix));
}

const diagonalDifference = (n, matrix) => {
  let sum = 0;

  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    let iEnd = n - 1 - i;
    sum = sum + (matrix[i][i] + matrix[iEnd][iEnd]) - (matrix[i][iEnd] + matrix[iEnd][i]);
  }

  return Math.abs(sum);
};



read().then(solve);
