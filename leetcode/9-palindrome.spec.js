const isPalindrome = require('./9-palindrome');

test('negative number is not a palindrome', () => {
  expect(isPalindrome(-11)).toBe(false);
});

test('is palindrome (not even)', () => {
  expect(isPalindrome(222)).toBe(true);
});

test('is palindrome (even)', () => {
  expect(isPalindrome(22)).toBe(true);
});

test('is not palindrome (not even)', () => {
  expect(isPalindrome(225)).toBe(false);
});

test('is not palindrome (even)', () => {
  expect(isPalindrome(25)).toBe(false);
});

test('zero is palindrome', () => {
  expect(isPalindrome(0)).toBe(true);
});

it('edge case for zero: 10', () => {
  expect(isPalindrome(10)).toBe(false);
});
