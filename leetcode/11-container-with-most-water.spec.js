const maxArea = require('./11-container-with-most-water');

test('simple', () => {
  expect(maxArea([1, 1])).toBe(1);
});

test('more complex', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});
