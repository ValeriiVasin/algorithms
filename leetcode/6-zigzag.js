// https://leetcode.com/problems/zigzag-conversion/description/

function convert(str, n) {
  const result = new Array(n).fill('');

  if (n === 1) {
    return str;
  }

  let diff = 1;
  let row = 0;
  const maxRow = n - 1;
  for (let char of str) {
    result[row] += char;

    if (row === 0) {
      diff = 1;
    }

    if (row === maxRow) {
      diff = -1;
    }

    row += diff;
  }

  return result.join('');
}

module.exports = convert;
