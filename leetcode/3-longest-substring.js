// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Note: current solution somehow works locally, but throws runtime exception on leetcode :(

const lengthOfLongestSubstring = function(s) {
  const set = new Set();

  let length = 0;
  for (const char of s) {
    if (set.has(char)) {
      const index = s.indexOf(char);
      const nextSubstring = s.slice(index + 1);
      const nextSubstringLength = nextSubstring.length;

      if (length >= nextSubstringLength) {
        return length;
      }

      return Math.max(length, lengthOfLongestSubstring(nextSubstring));
    }

    set.add(char);
    length += 1;
  }

  return length;
};

module.exports = lengthOfLongestSubstring;
