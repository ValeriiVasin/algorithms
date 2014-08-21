function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = {
  arr:  [1, 2, 5, 12, 10, 18, 38, -1, 3, 3, 5, 2],
  swap: swap
};
