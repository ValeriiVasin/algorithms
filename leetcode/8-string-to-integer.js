const MIN = -2147483648;
const MAX = 2147483647;

function myAtoi(str) {
  const number = parseInt(str, 10);

  if (Number.isNaN(number)) {
    return 0;
  }

  if (number > MAX) {
    return MAX;
  }

  if (number < MIN) {
    return MIN;
  }

  return number;
}

module.exports = myAtoi;
