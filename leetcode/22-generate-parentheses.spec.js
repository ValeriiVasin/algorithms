import { generateParenthesis } from './22-generate-parentheses';

test('sample data: 3', () => {
  expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});

test('single parenthesis', () => {
  expect(generateParenthesis(1)).toEqual(['()']);
});

test('two parenthesis', () => {
  expect(generateParenthesis(2)).toEqual(['(())', '()()']);
});

test('zero', () => {
  expect(generateParenthesis(0)).toEqual([]);
});
