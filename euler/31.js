var assert = require('assert');

var coins = [1, 2, 5, 10, 20, 50, 100, 200];

function getVariants(n) {
  var results = [1];

  /**
   * - Each cell contains number of ways with which this sum can be made
   * - Start from 1 cent for any sum - it's always 1 variant
   * - Increase sum cell with each coin possible to use in it
   */
  coins.forEach(function(coin) {
    for (var i = coin; i <= n; i++) {
      results[i] = (results[i] || 0) + results[i - coin];
    }
  });

  return results[n];
}

assert.equal(getVariants(1), 1);
assert.equal(getVariants(2), 2);
assert.equal(getVariants(3), 2);

assert.equal(getVariants(200), 73682);
