// @ts-check

const CHAR_MAP = new Map([
  [')', '('],
  [']', '['],
  ['}', '{'],
]);

export function isValid(s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      continue;
    }

    if (char === ')' || char === '}' || char === ']') {
      const value = CHAR_MAP.get(char);
      const stackValue = stack.pop();

      if (value !== stackValue) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
