'use strict'

// https://www.hackerrank.com/challenges/morgan-and-a-string

import { read } from '../../lib/read';

const solve = (reader) => {
  let N = reader.readNumber();

  for (let i = 0; i < N; i++) {
    let a = reader.readLine();
    let b = reader.readLine();

    console.log(getMinString(a, b));
  }
};

const getMinString = (a, b) => {
  let lengthA = a.length;
  let lengthB = b.length;
  let iA = 0;
  let iB = 0;
  let result = '';

  while (iA < lengthA || iB < lengthB) {
    if (iA === lengthA) {
      result += b.charAt(iB);
      iB++;
      continue;
    }

    if (iB === lengthB) {
      result += a.charAt(iA);
      iA++;
      continue;
    }

    let letterA = a.charAt(iA);
    let letterB = b.charAt(iB);

    if (letterA < letterB) {
      result += letterA;
      iA++;
      continue;
    }

    if (letterB < letterA) {
      result += letterB;
      iB++;
      continue;
    }

    // letters are equal
    let restA = a.slice(iA + 1);
    let restB = b.slice(iB + 1);
    let lengthRestA = restA.length;
    let lengthRestB = restB.length;

    // normalize by length
    if (lengthRestA < lengthRestB) {
      restA += 'Z'.repeat(lengthRestB - lengthRestA);
    }

    if (lengthRestB < lengthRestA) {
      restB += 'Z'.repeat(lengthRestA - lengthRestB);
    }

    if (restA < restB) {
      result += letterA;
      iA++;
      continue;
    }

    result += letterB;
    iB++;
  }

  return result;
};

read().then(solve);
