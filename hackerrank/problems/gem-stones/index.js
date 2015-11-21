'use strict'

// https://www.hackerrank.com/challenges/gem-stones

import { read } from '../../lib/read';

const solve = (reader) => {
  const N = reader.readNumber();

  let gemstones = reader.readLines(N);
  console.log(getCommonGemsCount(gemstones));
}

const getCommonGemsCount = (gemstones) => {
  let set = new Set(gemstones[0]);

  for (let i = 1, length = gemstones.length; i < length; i += 1) {
    let wordSet = new Set(gemstones[i]);

    // exclude letters that are not in word set from the common set
    for (let letter of set) {
      if (!wordSet.has(letter)) {
        set.delete(letter);

        if (set.size === 0) {
          return 0;
        }
      }
    }
  }

  return set.size;
};

read().then(solve);
