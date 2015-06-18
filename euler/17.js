var assert = require('assert');

var dictionary = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

var twoDigitsDictionary = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
};


function numberToString(number) {
  return _process(number).join(' ').trim();
}

function _process(number) {
  var _number = number;
  var result = [];

  // thousands
  var digit = Math.floor(number / 1000);
  number = number % 1000;
  if (digit) {
    result.push(dictionary[digit] + ' thousand');
  }

  if (!number) {
    return result;
  }

  // hundreds
  digit = Math.floor(number / 100);
  number = number % 100;
  if (digit) {
    result.push(dictionary[digit] + ' hundred');
  }

  if (!number) {
    return result;
  }

  if (_number > 100) {
    result.push('and');
  }

  if (number < 20) {
    result.push(dictionary[number]);
    return result;
  }

  digit = Math.floor(number / 10);
  number = number % 10;

  if (digit && number) {
    result.push(twoDigitsDictionary[digit] + '-' + dictionary[number]);
    return result;
  }

  if (digit) {
    result.push(twoDigitsDictionary[digit]);
    return result;
  }

  result.push(dictionary[number]);
  return result;
}

function countLetters(str) {
  return str.replace(/[^\w]/g, '').length;
}

function lettersInFirstNumbers(n) {
  var result = 0;

  for (var i = 1; i <= n; i++) {
    result += countLetters(numberToString(i));
  }

  return result;
}

assert.equal(numberToString(1000), 'one thousand');
assert.equal(numberToString(833), 'eight hundred and thirty-three');
assert.equal(numberToString(830), 'eight hundred and thirty');
assert.equal(numberToString(820), 'eight hundred and twenty');
assert.equal(numberToString(56), 'fifty-six');
assert.equal(numberToString(50), 'fifty');
assert.equal(numberToString(8), 'eight');
assert.equal(numberToString(21), 'twenty-one');
assert.equal(numberToString(20), 'twenty');

assert.equal(countLetters('three hundred and forty-two'), 23);
assert.equal(countLetters(numberToString(342)), 23);
assert.equal(countLetters('one hundred and fifteen'), 20);
assert.equal(countLetters(numberToString(115)), 20);

assert.equal(lettersInFirstNumbers(5), 19);
assert.equal(lettersInFirstNumbers(1000), 21124, 'Answer');
