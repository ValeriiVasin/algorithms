const convert = require('./6-zigzag');

test('example', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('2 rows', () => {
  expect(convert('hello world', 2)).toBe('hlowrdel ol');
});
