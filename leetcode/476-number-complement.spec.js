const findComplement = require('./476-number-complement');

test('first test case', () => {
  expect(findComplement(5)).toBe(2);
});

test('second test case', () => {
  expect(findComplement(1)).toBe(0);
});
