const longestCommonPrefix = require('./14-largest-prefix');

test('empty string for empty array', () => {
  expect(longestCommonPrefix([])).toBe('');
});

test('basic', () => {
  const input = ['leetcode', 'leets', 'leet', 'leeds'];

  expect(longestCommonPrefix(input)).toBe('lee');
});
