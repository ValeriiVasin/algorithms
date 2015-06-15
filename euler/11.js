var assert = require('assert');
var arrayProduct = require('./util').arrayProduct;
var length = 20;

var initial = [
  '08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08',
  '49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00',
  '81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65',
  '52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91',
  '22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80',
  '24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50',
  '32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70',
  '67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21',
  '24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72',
  '21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95',
  '78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92',
  '16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57',
  '86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58',
  '19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40',
  '04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66',
  '88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69',
  '04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36',
  '20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16',
  '20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54',
  '01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48'
];

var numbers = initial.map(function(str) {
  return str.split(' ').map(Number);
});

function greatestProduct(arr, digits) {
  return Math.max(
    greatestProductHorizontal(arr, digits),
    greatestProductVertical(arr, digits),
    greatestProductDiagonal(arr, digits)
  );
}

function greatestProductHorizontal(arr, digits) {
  return Math.max.apply(Math,
    arr.map(function(row) {
      return greatestSequenceProduct(row, digits);
    })
  );
}

function greatestProductVertical(arr, digits) {
  return greatestProductHorizontal(rotateCW(arr), digits);
}

/**
 * Greatest sequence product in diagonals
 */
function greatestProductDiagonal(arr, digits) {
  return Math.max(
    greatestProductDiagonalTopLeftToRightBottom(arr, digits),
    greatestProductDiagonalBottomLeftToTopRight(arr, digits)
  );
}

function greatestProductDiagonalTopLeftToRightBottom(arr, digits) {
  return greatestProductHorizontal(
    transformToDiagonalTopLeftToRightBottom(arr),
    digits
  );
}

function greatestProductDiagonalBottomLeftToTopRight(arr, digits) {
  return greatestProductHorizontal(
    transformToDiagonalBottomLeftToTopRight(arr),
    digits
  );
}

/**
 * Find greatest product in 1-dimensional array
 */
function greatestSequenceProduct(arr, digits) {
  var product = 0;
  var length = arr.length;

  if (length < digits) {
    return 0;
  }

  for (var i = 0; i <= length - digits; i++) {
    var sequence = arr.slice(i, i + digits);
    var _product = arrayProduct(sequence);

    if (_product > product) {
      product = _product;
    }
  }

  return product;
}

//
//  Transformations
//

function transformToDiagonalTopLeftToRightBottom(arr) {
  var length = arr.length;
  var results = [];

  for (var i = 0; i < length * 2 - 1; i++) {
    var result = [];

    var _i = i < length - 1 ? i : length - 1;
    var _j = i < length ? 0 : i % length + 1;

    for (var j = _j; j < length && _i >= 0; j++, _i--) {
      result.push(arr[j][_i]);
    }

    results.push(result);
  }

  return results;
}

function transformToDiagonalBottomLeftToTopRight(arr) {
  return transformToDiagonalTopLeftToRightBottom(
    rotateCW(arr)
  );
}

function rotateCW(arr) {
  var result = arr.map(function() {
    return [];
  });
  var length = arr.length;

  for (var i = length - 1; i >= 0; i--) {
    arr[i].forEach(function(value, index) {
      result[index][length - i - 1] = value;
    });
  }

  return result;
}

//
// Tests
//

var fixture = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

assert.equal(greatestSequenceProduct([1, 2, 3, 4], 3), 24, 'greatestSequenceProduct');

assert.deepEqual(transformToDiagonalTopLeftToRightBottom(fixture), [
  [1],
  [2, 4],
  [3, 5, 7],
  [6, 8],
  [9]
], 'transformToDiagonalTopLeftToRightBottom');

assert.deepEqual(transformToDiagonalBottomLeftToTopRight(fixture), [
  [7],
  [4, 8],
  [1, 5, 9],
  [2, 6],
  [3]
], 'transformToDiagonalBottomLeftToTopRight');

assert.deepEqual(rotateCW(fixture), [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
], 'rotateCW');

assert.equal(greatestProductHorizontal(fixture, 2), 72, 'greatestProductHorizontal');
assert.equal(greatestProductVertical(fixture, 2), 54, 'greatestProductVertical');
assert.equal(greatestProductDiagonalTopLeftToRightBottom(fixture, 2), 48, 'greatestProductDiagonalTopLeftToRightBottom');
assert.equal(greatestProductDiagonalBottomLeftToTopRight(fixture, 2), 45, 'greatestProductDiagonalBottomLeftToTopRight');
assert.equal(greatestProductDiagonal(fixture, 2), 48, 'greatestProductDiagonal');
assert.equal(greatestProduct(fixture, 2), 72, 'greatestProduct');

assert(greatestProduct(numbers, 4), 70600674, 'Answer');
