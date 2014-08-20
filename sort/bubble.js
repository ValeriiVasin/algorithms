function sort(arr) {
  var length = arr.length;
  var lastSwap, temp, i;

  do {
    lastSwap = 0;
    for (i = 0; i < length - 1; i += 1 ) {
      if ( arr[i] > arr[i + 1] ) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        lastSwap = i;
      }
    }

    length = lastSwap;
  } while (lastSwap !== 0);

  return arr;
}

module.exports = sort;
