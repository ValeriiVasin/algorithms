const reverse = require('./reverse-integer');

test('123', () => {
  expect(reverse(123)).toBe(321);
});

test('-123', () => {
  expect(reverse(-123)).toBe(-321);
});
