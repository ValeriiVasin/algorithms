const pow = require('./50-pow');

test('pow', () => {
  expect(pow(2, 2)).toBe(4);
});

test('negative pow', () => {
  expect(pow(2, -2)).toBe(0.25);
});

test('zero x', () => {
  expect(pow(0, 2)).toBe(0);
});

test('zero x, negative n', () => {
  expect(pow(0, -2)).toBe(Infinity);
});
