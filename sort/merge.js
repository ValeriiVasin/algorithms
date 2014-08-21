function sort(arr) {
  var length = arr.length;

  if (length <= 1) {
    return arr;
  }

  // split array for 2
  var middle = Math.floor( length / 2 );
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, length);

  return merge(sort(left), sort(right));
}

/**
 * Merge two sorted arrays
 * @return {Array}    Result sorted array
 */
function merge(arr1, arr2) {
  var result = [];
  var length1 = arr1.length;
  var length2 = arr2.length;
  var i1 = 0;
  var i2 = 0;

  while (i1 < length1 || i2 < length2) {
    if ( i2 >= length2 ) {

      // all elements from arr2 has been added
      result.push( arr1[i1] );
      i1 += 1;
    } else if ( i1 >= length1 ) {

      // all elements from arr1 has been added
      result.push( arr2[i2] );
      i2 += 1;
    } else if ( arr1[i1] < arr2[i2] ) {
      result.push( arr1[i1] );
      i1 += 1;
    } else {
      result.push( arr2[i2] );
      i2 += 1;
    }
  }

  return result;
}

module.exports = sort;
