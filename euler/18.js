var assert = require('assert');
var readFixture = require('./util').readFixture;

function parse(content) {
  return content.trim().split('\n').map(function(row) {
    return row.split(' ').map(Number);
  });
}

var numbers = parse(readFixture('18.txt'));

var fixtureNumbers = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

/**
 * 1) Go from bottom to the top and select max between children
 * 2) Add value to max from children and save it
 * 3) Continue until root is reached
 */
function maxSequenceSum(arr) {
  arr = arr.slice();
  var length = arr.length;

  for (var i = length - 2; i >= 0; i--) {
    /*eslint-disable no-loop-func*/
    arr[i] = arr[i].map(function(value, j) {
      return value + Math.max(
        arr[i + 1][j],
        arr[i + 1][j + 1]
      );
    });
    /*eslint-enable no-loop-func*/
  }

  return arr[0][0];
}

assert.equal(maxSequenceSum(fixtureNumbers), 23);
assert.equal(maxSequenceSum(numbers), 1074, 'Answer');

module.exports = {
  parse: parse,
  maxSequenceSum: maxSequenceSum
};
