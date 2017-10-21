// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Note: current solution somehow works locally, but throws runtime exception on leetcode :(

export const lengthOfLongestSubstring = function(s) {
  const length = s.length;
  if (length === 0) {
    return 0;
  }

  const uniq = new Set();
  let i = 0;
  let maxLength = 0;
  let start = 0;
  while (i < length) {
    const char = s.charAt(i);

    if (!uniq.has(char)) {
      uniq.add(char);
      i += 1;
      continue;
    }

    const currentLength = uniq.size;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }

    uniq.clear();
    i = s.indexOf(char, start) + 1;
    start = i;
  }

  const currentLength = uniq.size;
  if (currentLength > maxLength) {
    return currentLength;
  }

  return maxLength;
};
