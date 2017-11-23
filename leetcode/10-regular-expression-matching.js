// Regular Expression Matching
// https://leetcode.com/problems/regular-expression-matching/description

/**
 * TODO: solve me soon
 */

export const isMatch = (str, pattern) => {
  const hasStars = pattern.includes('*');
  const hasDots = pattern.includes('.');

  if (!hasStars && !hasDots) {
    return
  }
};
