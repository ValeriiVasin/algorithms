'use strict'

// https://www.hackerrank.com/challenges/the-time-in-words

import { read } from '../../lib/read';

const solve = (reader) => {
  let hours = reader.readNumber();
  let minutes = reader.readNumber();

  console.log(timeToString(hours, minutes));
};

export const timeToString = (hours, minutes) => {
  let nextHours = hours === 12 ? 1 : hours + 1;

  if (minutes === 0) {
    return `${numberToString(hours)} o' clock`;
  }

  if (minutes === 15) {
    return `quarter past ${numberToString(hours)}`;
  }

  if (minutes === 30) {
    return `half past ${numberToString(hours)}`;
  }

  if (minutes === 45) {
    return `quarter to ${numberToString(nextHours)}`;
  }

  if (minutes < 30) {
    return `${numberToString(minutes)} ${minutes === 1 ? 'minute' : 'minutes'} past ${numberToString(hours)}`;
  }

  minutes = 60 - minutes;

  return `${numberToString(minutes)} ${minutes === 1 ? 'minute' : 'minutes'} to ${numberToString(nextHours)}`;
};

const numberToString = (number) => {
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
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

  if (number <= 20) {
    return dictionary[number];
  }

  var small = number % 10;
  var big = number - small;

  if (number < 100) {
    return small ? dictionary[big] + ' ' + dictionary[small] : dictionary[big];
  }

  if (number < 1000) {
    var hundreds = Math.floor(number / 100);
    var tens = number % 100;

    var result = dictionary[hundreds] + ' hundred';

    if (tens) {
      result += ' and ' + numberToString(tens);
    }

    return result;
  }

  if (number < 1000000) {
    var thousands = Math.floor(number / 1000);
    var rest = number % 1000;

    var result = numberToString(thousands) + ' thousand';
    if (rest) {
      result += ', ' + numberToString(rest);
    }

    return result;
  }
};

read().then(solve);
