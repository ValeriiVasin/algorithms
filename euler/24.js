var assert = require('assert');
var quickSelect = require('../sort/quick').select;

/**
 * https://en.wikipedia.org/wiki/Heap's_algorithm
 */
function generate(arr, n, permutations) {
  if (n === 1) {
    permutations.push(arr.join(''));
    return;
  }

  for (var i = 0; i < n; i += 1) {
    generate(arr, n - 1, permutations);

    if (n % 2) {
      swap(arr, i, n - 1);
    } else {
      swap(arr, 0, n - 1);
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getPermutations(arr) {
  var permutations = [];

  generate(arr, arr.length, permutations);
  return permutations;
}

function getPermutation(arr, n) {
  var permutations = getPermutations(arr);
  return quickSelect(permutations, n - 1);
}

assert.equal(getPermutation([0, 1, 2], 1), '012');
assert.equal(getPermutation([2, 0, 1], 1), '012');
assert.equal(
  getPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1000000),
  '2783915460',
  'Answer'
);
