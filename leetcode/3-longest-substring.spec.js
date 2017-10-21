import { lengthOfLongestSubstring } from './3-longest-substring';

const fs = require('fs');
const path = require('path');

test('first example', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('second example', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('third example', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});

test('overlapping substrings', () => {
  expect(lengthOfLongestSubstring('dvdf')).toBe(3);
});

test('superlong', () => {
  const input = fs.readFileSync(path.resolve(__dirname, './3-fixture.txt'), 'utf8');
  expect(lengthOfLongestSubstring(input)).toBe(95);
});
