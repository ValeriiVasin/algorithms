var assert = require('assert');
var combinations = require('./util').combinations;

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
assert.equal(getUniqPathsCombinatorial(20), 137846528820, 'Answer');
