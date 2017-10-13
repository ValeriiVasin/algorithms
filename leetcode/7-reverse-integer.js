// https://leetcode.com/problems/reverse-integer/description/

const MAX = Math.pow(2, 31);
const MIN = -MAX + 1;

function reverse(x) {
  if (x === 0) {
    return 0;
  }

  const isNegative = x < 0;
  if (isNegative) {
    x = -x;
  }

  let result = 0;
  while (x) {
    const digit = x % 10;
    result = result * 10 + digit;

    if (result > MAX || result < MIN) {
      return 0;
    }

    x = (x - digit) / 10;
  }

  return isNegative ? -result : result;
}

module.exports = reverse;
