/**
 * Selection sort
 * http://en.wikipedia.org/wiki/Selection_sort
 */

function sort(arr) {
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

    // swap
    if ( minIndex !== i ) {
      arr[minIndex] = arr[i];
      arr[i] = minValue;
    }
  }

  return arr;
}

module.exports = sort;
