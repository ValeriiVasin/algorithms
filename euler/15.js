var assert = require('assert');

function go(x, y, n) {
  if (x === n && y === n) {
    return 1;
  }

  if (x === n) {
    return 1;
  }

  if (y === n) {
    return 1;
  }

  var cacheKey = [x, y, n].join(';');
  if (!go[cacheKey]) {
    go[cacheKey] = go(x + 1, y, n) + go(x, y + 1, n);
  }

  return go[cacheKey];
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  if (!factorial[n]) {
    factorial[n] = n * factorial(n - 1);
  }

  return factorial[n];
}

function combinations(n, k) {
  return (factorial(n) / factorial(k)) / factorial(n - k);
}

/**
 * Combinatorial solution
 * Notice: not working for n > 85 (need big num)
 *
 * http://articles.leetcode.com/2010/11/unique-paths.html
 */
function getUniqPathsCombinatorial(n) {
  return combinations(2 * n, n);
}

assert.equal(go(0, 0, 2), 6);
assert.equal(go(0, 0, 5), 252);
assert.equal(go(0, 0, 10), 184756);
assert.equal(go(0, 0, 15), 155117520);
assert.equal(go(0, 0, 20), 137846528820, 'Answer');
