// https://www.hackerrank.com/challenges/plus-minus

import { readLines } from '../lib/read';

const getFractions = (array, precision) => {
  const length = array.length;
  const { positive, negative, zero } = array.reduce((result, value) => {
    if (value > 0) {
      result.positive += 1;
    }

    if (value < 0) {
      result.negative += 1;
    }

    if (value === 0) {
      result.zero += 1;
    }

    return result;
  }, { positive: 0, negative: 0, zero: 0 });

  return {
    positive: (positive ? positive / length : 0).toFixed(precision),
    negative: (negative ? negative / length : 0).toFixed(precision),
    zero: (zero ? zero / length : 0).toFixed(precision)
  };
};

const solve = (lines) => {
  let n = Number(lines[0]);
  let numbers = lines[1].split(' ').map(Number).slice(0, n);

  let fractions = getFractions(numbers, 3);

  console.log(fractions.positive);
  console.log(fractions.negative);
  console.log(fractions.zero);
};

readLines().then(solve);
