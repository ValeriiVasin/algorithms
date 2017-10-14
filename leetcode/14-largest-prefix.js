// https://leetcode.com/problems/longest-common-prefix/description/

function commonPrefix(s1, s2) {
  const length = Math.min(s1.length, s2.length);

  let prefix = '';
  for (let i = 0; i < length; i++) {
    const char1 = s1.charAt(i);
    const char2 = s2.charAt(i);

    if (char1 !== char2) {
      return prefix;
    }

    prefix += char1;
  }

  return prefix;
}

function longestCommonPrefix(strs) {
  const length = strs.length;

  if (length === 0) {
    return '';
  }

  let prefix = strs[0];
  for (let i = 1; i < length; i += 1) {
    prefix = commonPrefix(prefix, strs[i]);

    if (prefix.length === 0) {
      return '';
    }
  }

  return prefix;
}

module.exports = longestCommonPrefix;
