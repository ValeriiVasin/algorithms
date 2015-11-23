'use strict'

// https://www.hackerrank.com/challenges/save-humanity

import { read } from '../../lib/read';

const solve = (reader) => {
  let n = reader.readNumber();

  for (let i = 0; i < n; i++) {
    let [patient, virus] = reader.readLine().split(' ');
    let matches = findMatches(patient, virus);

    console.log(matches ? matches.join(' ') : 'No Match!');
  }
};

export const createSuffixesArray = (str) => {
  let suffixes = [];
  let length = str.length;

  let suffix = '';
  for (let i = length - 1; i >= 0; i--) {
    suffix = str.charAt(i) + suffix;
    suffixes.push({ suffix: suffix, index: i });
  }

  return suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));
};

export const findMatches = (patient, virus) => {
  let suffixes = createSuffixesArray(patient, virus.length);
  let indices = [];

  for (let { suffix, index } of suffixes) {
    if (isMatching(suffix, virus)) {
      indices.push(index);
    }
  }

  return indices.length ? indices.sort() : false;
};

export const isMatching = (patient, virus) => {
  if (patient.length < virus.length) {
    return false;
  }

  let mismatches = 0;
  for (let i = 0, length = virus.length; i < length; i++) {
    if (patient.charAt(i) !== virus.charAt(i)) {
      mismatches++;
    }

    if (mismatches > 1) {
      return false;
    }
  }

  return true;
};

read().then(solve);
