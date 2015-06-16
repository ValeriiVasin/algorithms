/**
 * http://en.wikipedia.org/wiki/Binary_search_algorithm
 */

/*eslint-disable no-unused-vars*/
function binarySearchRecursive(arr, value) {
  return _binarySearchRecursive(arr, value, 0, arr.length - 1);
}

function _binarySearchRecursive(arr, value, left, right) {
  if (left > right) {
    return -1;
  }

  var middleIndex = left + Math.floor((right - left) / 2);
  var middleValue = arr[middleIndex];

  if (middleValue === value) {
    return middleIndex;
  }

  return middleValue > value ?
    _binarySearchRecursive(arr, value, left, middleIndex - 1) :
    _binarySearchRecursive(arr, value, middleIndex + 1, right);
}

function binarySearchIterative(arr, value) {
  var left = 0;
  var right = arr.length - 1;
  var middleIndex, middleValue;

  while (left <= right) {
    middleIndex = left + Math.floor((right - left) / 2);
    middleValue = arr[middleIndex];

    if (middleValue > value) {
      right = middleIndex - 1;
    } else if (middleValue < value) {
      left = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }

  // not found
  return -1;
}

module.exports = binarySearchIterative;
