const map = new Map([
  ['0', []],
  ['1', []],
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
]);

export const letterCombinations = digits => {
  const length = digits.length;

  if (length === 0) {
    return [];
  }

  if (length === 1) {
    return map.get(digits);
  }

  const current = digits.charAt(0);
  const currentResult = map.get(current);
  const nextResult = letterCombinations(digits.slice(1));

  if (currentResult.length === 0) {
    return nextResult;
  }

  return currentResult.reduce((result, letter) => {
    const withLetter = nextResult.map(str => letter + str);
    return result.concat(withLetter);
  }, []);
};
