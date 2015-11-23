'use strict'

// https://www.hackerrank.com/challenges/find-strings

import { read } from '../../lib/read';

/**
 * Useful video about suffix arrays and substrings: https://www.youtube.com/watch?v=HKPrVm5FWvg
 * Wiki article about LCP: https://en.wikipedia.org/wiki/LCP_array
 *
 * How to solve the problem:
 * 1) construct sorted suffix array
 * 2) construct largest common prefixes array [basically - array, that contains lengths of common prefix with previous prefix]
 * 3) go through sorted suffixes and search when the suffix will contain Nth word
 *    * Each suffix contains few words, e.g. "aab" => "a", "aa", "aab"
 *    * If suffix has LCP with previous suffix - do not include common words:
 *      suffix[0] = aab | LCP[0] = 0                  | words: a, aa, aab
 *      suffix[1] = aac | LCP[1] = 2 (2 common words) | words: aac  // a and aa is already part of previous one
 */

const solve = (reader) => {
  const n = reader.readNumber();
  const strings = reader.readLines(n);
  const queries = reader.readNumber();

  let suffixes = createSuffixesArray(strings);
  let lcp = createLCPArray(suffixes);

  for (let i = 0; i < queries; i++) {
    let k = reader.readNumber();
    let nthSubstring = getNthSubstring(suffixes, lcp, k);

    console.log(!nthSubstring ? 'INVALID' : nthSubstring);
  }
};

export const createSuffixesArray = (strings) => {
  let suffixes = new Set();

  for (let str of strings) {
    let length = str.length;

    let suffix = '';
    for (let i = length - 1; i >= 0; i--) {
      suffix = str.charAt(i) + suffix;
      suffixes.add(suffix);
    }
  }

  return [...suffixes].sort();
};

export const createLCPArray = (suffixes) => {
  let result = [0];
  let length = suffixes.length;

  for (let i = 1; i < length; i++) {
    let prev = suffixes[i - 1];
    let current = suffixes[i];
    let length = Math.min(prev.length, current.length);

    let j = 0;
    while (prev.charAt(j) === current.charAt(j)) {
      j++;
    }

    result[i] = j;
  }

  return result;
};

/**
 * n should be 1 or more
 */
export const getNthSubstring = (suffixes, lcp, n) => {
  let i = 0;
  let words = 0;
  let length = suffixes.length;

  for (let i = 0; i < length; i++) {
    let word = suffixes[i];

    // current suffix contains this amount of uniq words
    let count = word.length - lcp[i];

    words += count;

    if (words >= n) {
      // [1..count]
      let wordIndex = count - (words - n);

      return word.slice(0, lcp[i] + wordIndex);
    }
  }

  return false;
};

read().then(solve);
