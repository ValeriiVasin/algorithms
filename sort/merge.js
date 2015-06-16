/**
 * http://en.wikipedia.org/wiki/Merge_sort
 */
function sort(arr, comparator) {
  var length = arr.length;

  if (length <= 1) {
    return arr;
  }

  var middle = Math.floor(length / 2);

  return merge(
    sort(arr.slice(0, middle), comparator),
    sort(arr.slice(middle, length), comparator),
    comparator
  );
}

function merge(leftArr, rightArr, comparator) {
  var result = [];

  var leftLength = leftArr.length;
  var rightLength = rightArr.length;
  var i = 0;
  var j = 0;
  var compare;

  while (i < leftLength || j < rightLength) {
    if (i < leftLength && j < rightLength) {
      compare = comparator(leftArr[i], rightArr[j]);

      if (compare < 0) {
        result.push(leftArr[i]);
        i += 1;
      } else if (compare > 0) {
        result.push(rightArr[j]);
        j += 1;
      } else {
        result.push(leftArr[i], rightArr[j]);
        i += 1;
        j += 1;
      }
    } else if (i < leftLength) {
      result.push(leftArr[i]);
      i += 1;
    } else {
      result.push(rightArr[j]);
      j += 1;
    }
  }

  return result;
}

module.exports = sort;
