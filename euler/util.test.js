var assert = require('assert');
var multiply = require('./util').multiply;
var fibonacci = require('./util').fibonacci;

it('works as expected', () => {
  expect(multiply([2, 5], 2)).toEqual([5, 0]);
  expect(multiply([5, 8], 20)).toEqual([1, 1, 6, 0]);
  expect(multiply([6, 4], 2)).toEqual([1, 2, 8]);

  expect(fibonacci(12)).toBe(144);
});
