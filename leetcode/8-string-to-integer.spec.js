const myAtoi = require('./8-string-to-integer');

test('with whitespaces at the start', () => {
  expect(myAtoi('    10')).toBe(10);
});

test('with whitespaces at the end', () => {
  expect(myAtoi('10    ')).toBe(10);
});

test('ignores non-numeric characters at the end', () => {
  expect(myAtoi('10 asdbc')).toBe(10);
});

test('with non-digit characters at the beginning', () => {
  expect(myAtoi('hello 10')).toBe(0);
});

test('less than provided MIN', () => {
  expect(myAtoi('-2147483649')).toBe(-2147483648);
});

test('more than provided MAX', () => {
  expect(myAtoi('2147483650')).toBe(2147483647);
});

test('parses negative', () => {
  expect(myAtoi('-10')).toBe(-10);
});

test('parses positive', () => {
  expect(myAtoi('+10')).toBe(10);
});

test('+-1 is not a number', () => {
  expect(myAtoi('+-1')).toBe(0);
});
