// https://leetcode.com/problems/longest-palindromic-substring/description/
// http://www.geeksforgeeks.org/longest-palindromic-substring-set-2/

function longestPalindrome(s) {
  const length = s.length;

  let maxStart = 0;
  let maxLength = 1;
  for (let i = 1; i < length; i += 1) {
    // longest palindromic substring with odd length and center in s[i]
    let start = i;
    let end = i;
    let isPalindrome = true;
    let currentMaxLength;

    while (isPalindrome && start >= 0 && end < length) {
      isPalindrome = s.charAt(start) === s.charAt(end);

      if (!isPalindrome) {
        continue;
      }

      start -= 1;
      end += 1;
    }

    end -= 1;
    start += 1;

    currentMaxLength = end - start + 1;
    if (currentMaxLength > maxLength) {
      maxLength = currentMaxLength;
      maxStart = start;
    }

    // even length palindromic substring with center s[i-1]:s[i]
    start = i - 1;
    end = i;
    isPalindrome = s.charAt(start) === s.charAt(end);

    while (isPalindrome && start >= 0 && end < length) {
      isPalindrome = s.charAt(start) === s.charAt(end);

      if (!isPalindrome) {
        continue;
      }

      start -= 1;
      end += 1;
    }

    end -= 1;
    start += 1;

    currentMaxLength = end - start + 1;
    if (currentMaxLength > maxLength) {
      maxLength = currentMaxLength;
      maxStart = start;
    }
  }

  return s.slice(maxStart, maxStart + maxLength);
}

module.exports = longestPalindrome;
