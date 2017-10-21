import { threeSumClosest } from './16-3sum-closest';

test('input #1', () => {
  const input = [-1, 2, 1, -4];
  expect(threeSumClosest(input, 1)).toBe(2);
});

test('input #2', () => {
  const input = [0, 3, 5, 10, 25];
  expect(threeSumClosest(input, 10)).toBe(8);
});

test('input #3', () => {
  const input = [-5, 3, 5, 10, 25];
  expect(threeSumClosest(input, 3)).toBe(3);
});

test('input #4', () => {
  const input = [-5, 3, 5, 10, 25];
  expect(threeSumClosest(input, 18)).toBe(18);
});

test('zeros only', () => {
  const input = [0, 0, 0];
  expect(threeSumClosest(input, 1)).toBe(0);
});

test('uniques', () => {
  const input = [-5, 2, -5, 2, 3, 5, -5];
  expect(threeSumClosest(input, -15)).toBe(-15);
});
