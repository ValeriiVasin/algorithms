/**
 * Selection sort
 * http://en.wikipedia.org/wiki/Selection_sort
 */
var swap = require('./common').swap;

function sort(arr, callback) {
  var length = arr.length;
  var minValue, minIndex, i, j;

  for (i = 0; i < length; i += 1) {
    minIndex = i;
    minValue = arr[minIndex];

    for (j = i + 1; j < length; j += 1) {
      if ( arr[j] < minValue ) {
        minValue = arr[j];
        minIndex = j;
      }
    }

    swap(arr, minIndex, i);

    if (typeof callback === 'function') {
      callback(arr);
    }
  }

  return arr;
}

module.exports = sort;
