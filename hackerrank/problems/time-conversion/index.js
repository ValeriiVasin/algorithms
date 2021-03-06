'use strict';

// https://www.hackerrank.com/challenges/time-conversion

import { read } from '../../lib/read';

export const convertTime = (input) => {
  return input.replace(/(\d{2}):(\d{2}):(\d{2})(\w{2})/, replacer);
};

const replacer = (match, hours, minutes, seconds, pmam) => {
  if (pmam === 'AM' && hours === '12') {
    hours = '00';
  }

  if (pmam === 'PM' && hours !== '12') {
    hours = Number(hours) + 12;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

const solve = (reader) => {
  for (let line of reader.readLines()) {
    console.log(convertTime(line));
  }
};

read().then(solve);
