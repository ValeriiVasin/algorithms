'use strict'

// https://www.hackerrank.com/challenges/staircase

import { read } from '../../lib/read';

function solve(reader) {
  let n = reader.readNumber();

  // draw stairs
  for (let i = 1; i <= n; i += 1) {
    let spaces = ' '.repeat(n - i);
    let filled = '#'.repeat(i);
    console.log(`${spaces}${filled}`);
  }
}

read().then(solve);
