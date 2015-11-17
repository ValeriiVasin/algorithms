// https://www.hackerrank.com/challenges/plus-minus

import { read } from '../../lib/read';

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

const solve = (reader) => {
  let n = reader.readNumber();
  let numbers = reader.readNumbers(n);

  let fractions = getFractions(numbers, 3);

  console.log(fractions.positive);
  console.log(fractions.negative);
  console.log(fractions.zero);
};

read().then(solve);
