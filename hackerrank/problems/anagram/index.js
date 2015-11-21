'use strict'

// https://www.hackerrank.com/challenges/anagram

import { read } from '../../lib/read';

const solve = (reader) => {
  let T = reader.readNumber();

  for (let i = 0; i < T; i++) {
    console.log(numberOfChanges(reader.readLine()));
  }
}

const numberOfChanges = (word) => {
  let length = word.length;

  if (length % 2 !== 0) {
    return -1;
  }

  let a = word.slice(0, length / 2);
  let b = word.slice(length / 2);

  let aMap = createLettersMap(a);
  let bMap = createLettersMap(b);

  let changes = 0;
  for (let [letter, count] of aMap) {
    if (bMap.has(letter)) {
      if (bMap.get(letter) < count) {
        changes += count - bMap.get(letter);
      }
    } else {
      changes += count;
    }
  }

  return changes;
};

const createLettersMap = (str) => {
  const map = new Map();

  for (let s of str) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1);
  }

  return map;
};

read().then(solve);
