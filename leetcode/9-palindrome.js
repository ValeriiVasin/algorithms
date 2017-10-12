// https://leetcode.com/problems/palindrome-number/description/

/**
 * compare till the middle of the number (if reverseX > x -- more than middle)
 */

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  if (x === 0) {
    return true;
  }

  // edge case that leds to incorrect comparisons because of initial zero
  if (x % 10 === 0) {
    return false;
  }

  let reverseX = 0;
  while (x) {
    const digit = x % 10;
    reverseX = reverseX * 10 + digit;

    // check for not even digit numbers
    if (reverseX === x) {
      return true;
    }

    x = (x - digit) / 10;

    // check for even digit numbers
    if (reverseX === x) {
      return true;
    }

    if (reverseX > x) {
      return false;
    }
  }

  return false;
}

module.exports = isPalindrome;
