// Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/description

function createStep(n) {
  const lastStep = n * 2;

  return function step(str, value, increases) {
    if (increases > n) {
      return [];
    }

    if (value > n) {
      return [];
    }

    if (value < 0) {
      return [];
    }

    const length = str.length;
    if (length > lastStep) {
      return [];
    }

    if (length === lastStep) {
      return [str];
    }

    return [...step(str + '(', value + 1, increases + 1), ...step(str + ')', value - 1, increases)];
  };
}

export const generateParenthesis = n => {
  const step = createStep(n);

  return step('(', 1, 1);
};
