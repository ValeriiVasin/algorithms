const { twoSum } = require('./two-sum');

test('one', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('two', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1, 2]);
});
