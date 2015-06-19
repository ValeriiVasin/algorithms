var assert = require('assert');
var multiply = require('./util').multiply;
var fibonacci = require('./util').fibonacci;

assert.deepEqual(multiply([2, 5], 2), [5, 0]);
assert.deepEqual(multiply([5, 8], 20), [1, 1, 6, 0]);
assert.deepEqual(multiply([6, 4], 2), [1, 2, 8]);

assert.equal(fibonacci(12), 144);
