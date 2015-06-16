var swap = require('./common').swap;

function sort(arr) {
  var length = arr.length;
  var lastSwap, i;

  do {
    lastSwap = 0;

    for (i = 0; i < length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        lastSwap = i;
      }
    }

    length = lastSwap + 1;
  } while (lastSwap !== 0);

  return arr;
}

module.exports = sort;
