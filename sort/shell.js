/*eslint-disable no-unused-vars*/

function sort(arr, callback) {
  var length = arr.length;

  getGaps3xPlusOne(length).forEach(function(gap) {

    for (var i = gap; i < length; i += 1) {
      var value = arr[i];

      // move i-th element to it's position in h-sorted array
      for (var j = i; j >= gap && arr[j - gap] > value; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = value;
    }

    if (typeof callback === 'function') {
      callback(arr);
    }
  });

  return arr;
}

/**
 * Get gaps according to formula: 3x + 1
 *
 * @param  {Number} n Array length
 * @return {Array}    Array of gaps
 */
function getGaps3xPlusOne(n) {
  var gaps = [1];

  while (3 * gaps[gaps.length - 1] + 1 < n) {
    gaps.push(3 * gaps[gaps.length - 1] + 1);
  }

  return gaps.reverse();
}

/**
 * Gaps according to Knuth formula: (3^k - 1) / 2
 *
 * @param  {Number} n Array length
 * @return {Array}    Array of gaps
 */
function getGaps(n) {
  var results = [];
  var limit = Math.floor(n / 3);
  var k = 1;
  var gap;

  do {
    gap = (Math.pow(3, k) - 1) / 2;
    results.unshift(gap);
    k += 1;
  } while (gap < limit);

  // remove extra gap
  results.shift();

  return results;
}

module.exports = sort;
