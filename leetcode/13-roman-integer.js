// https://leetcode.com/problems/roman-to-integer/description/
// https://en.wikipedia.org/wiki/Roman_numerals

const NUMBERS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function romanToInt(s) {
  const numbers = s.split('').map(char => NUMBERS[char]);

  let max = numbers[numbers.length - 1];
  let sum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    const number = numbers[i];

    if (number < max) {
      sum = sum -number;
      continue;
    }

    if (number > max) {
      max = number;
    }

    sum = sum + number;
  }

  return sum;
}

module.exports = romanToInt;
