const { twoSum } = require('./1-two-sum');

test('simple case', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('do not use same element twice', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1, 2]);
});

test('there could be few elements with same value', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
