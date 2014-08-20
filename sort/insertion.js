/**
 * Insertion sort
 * http://en.wikipedia.org/wiki/Insertion_sort
 */

function sort(arr) {
  var length = arr.length;
  var i, j, value;

  for (i = 1; i < length; i += 1) {
    j = i;
    value = arr[i];
    while ( j >= 0 && value < arr[j - 1] ) {
      arr[j] = arr[j - 1];
      j -= 1;
    }

    arr[j] = value;
  }

  return arr;
}

module.exports = sort;
