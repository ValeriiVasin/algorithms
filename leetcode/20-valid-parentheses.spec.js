import { isValid } from './20-valid-parentheses';

test('simple valid case #1', () => {
  expect(isValid('()')).toBe(true);
});

test('simple valid case #2', () => {
  expect(isValid('()[]{}')).toBe(true);
});

test('simple invalid case #1', () => {
  expect(isValid('(]')).toBe(false);
});

test('invalid case #2', () => {
  expect(isValid('([)]')).toBe(false);
});

test('invalid case #3', () => {
  expect(isValid('([)]((')).toBe(false);
});
