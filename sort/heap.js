/**
 * http://en.wikipedia.org/wiki/Heapsort
 *
 * iParent     = floor( (i-1) / 2 )
 * iLeftChild  = 2 * i + 1
 * iRightChild = 2 * i + 2
 */

var swap = require('./common').swap;

function sort(arr) {
  heapify(arr);

  var end = arr.length - 1;
  while (end > 0) {
    swap(arr, 0, end);
    end -= 1;
    siftDown(arr, 0, end);
  }

  return arr;
}

function heapify(arr) {
  var lastChild = arr.length - 1;
  // last parent element
  var start = Math.floor( (lastChild - 1) / 2 );

  while ( start >= 0 ) {
    siftDown(arr, start, lastChild);
    start -= 1;
  }
}

/**
 * Check that all children are less then root
 * @param  {Array} arr    Array of elements
 * @param  {Number} start Root index
 * @param  {Number} end   Last element index to be affected
 */
function siftDown(arr, start, end) {
  var root = start;
  var leftChildIndex, rightChildIndex, nextRoot;

  // while we have children to sift
  while (root * 2 + 1 <= end) {
    nextRoot = root;
    leftChildIndex = root * 2 + 1;

    if ( arr[leftChildIndex] > arr[nextRoot] ) {
      nextRoot = leftChildIndex;
    }

    rightChildIndex = leftChildIndex + 1;
    if ( rightChildIndex <= end ) {
      if ( arr[rightChildIndex] > arr[nextRoot] ) {
        nextRoot = rightChildIndex;
      }
    }

    // nothing to change
    if ( root === nextRoot ) {
      return;
    } else {
      swap(arr, root, nextRoot);
      root = nextRoot;
    }
  }
}

module.exports = sort;

