function sort(arr) {
  var length = arr.length;
  var swapped, temp, i;

  do {
    swapped = false;
    for (i = 0; i < length - 1; i += 1 ) {
      if ( arr[i] > arr[i + 1] ) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

module.exports = sort;
