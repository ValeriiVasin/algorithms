// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Note: current solution somehow works locally, but throws runtime exception on leetcode :(

export const lengthOfLongestSubstring = function(s) {
  const length = s.length;
  if (length === 0) {
    return 0;
  }

  const uniq = new Set();
  let start = 0;
  let end = 0;
  let maxLength = 0;
  while (start < length && end < length) {
    const char = s.charAt(end);

    if (!uniq.has(char)) {
      uniq.add(char);
      end += 1;
      maxLength = Math.max(maxLength, uniq.size);
      continue;
    }

    uniq.delete(s.charAt(start));
    start += 1;
  }

  return maxLength;
};
