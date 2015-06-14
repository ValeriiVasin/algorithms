var assert = require('assert');

var number = 999 * 999;

function isPalindrome(number) {
  var stringified = String(number);
  var reversed = stringified.split('').reverse().join('');

  return stringified === reversed;
}

function getLargestPalindrome() {
  var value;
  var palindrome;

  console.time('optimal');
  for (var i = 999; i >= 100; i--) {
    if (palindrome && palindrome > i * i) {
      break;
    }

    for (var j = i; j >= 100; j--) {
      value = i * j;

      if (palindrome && value < palindrome) {
        break;
      }

      if (isPalindrome(value)) {
        palindrome = value;

        // other values in this loop is lower
        break;
      }
    }
  }
  console.timeEnd('optimal');

  return palindrome;
}

function getLargestPalindromeNonOptimal() {
  var palindrome = 0;

  console.time('non optimal');
  for (var i = 999; i >= 100; i--) {
    for (var j = 999; j >= 100; j--) {
      var value = i * j;

      if (isPalindrome(value) && value > palindrome) {
        palindrome = value;
      }
    }
  }
  console.timeEnd('non optimal');

  return palindrome;
}

assert.equal(getLargestPalindrome(), 906609, 'Answer');
assert.equal(getLargestPalindromeNonOptimal(), 906609, 'Answer');
