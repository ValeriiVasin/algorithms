export const lonelyInteger = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const cache = {};

  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = i;
  }

  const uniqSum = Object.keys(cache).reduce((sum, n) => sum + Number(n), 0);
  const expectedSum = uniqSum * 2;
  const sum = arr.reduce((sum, n) => sum + n, 0);

  return expectedSum - sum;
}
