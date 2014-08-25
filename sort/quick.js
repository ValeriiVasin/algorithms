/**
 * http://en.wikipedia.org/wiki/Quicksort
 */

var swap = require('./common').swap;

function sort(arr) {
  return quicksort(arr, 0, arr.length - 1);
}

function quicksort(arr, left, right) {
  if ( left >= right ) {
    return;
  }

  var _partition = partition(arr, left, right);
  quicksort(arr, 0, _partition - 1);
  quicksort(arr, _partition + 1, right);

  return arr;
}

function partition(arr, left, right) {
  // choose random pivot
  var pivotIndex = random(left, right);
  var pivotValue = arr[pivotIndex];
  var i;

  // move pivot element to the right - we should not process it
  swap(arr, pivotIndex, right);

  var storeIndex = left;
  for (i = left; i < right; i += 1) {
    if ( arr[i] < pivotValue ) {

      // if element is less then pivot - swap it with storeIndex element,
      // which is greater
      swap(arr, i, storeIndex);

      storeIndex += 1;
    }
  }

  swap(arr, storeIndex, right);

  return storeIndex;
}

/**
 * Random number between [start, end]
 * @param  {Number} start Start number
 * @param  {Number} end   End number
 * @return {Number} Random number
 */
function random(start, end) {
  return start + Math.round( Math.random() * (end - start) );
}

module.exports = sort;