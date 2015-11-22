'use strict'

// https://www.hackerrank.com/challenges/encryption

import { read } from '../../lib/read';

const solve = (reader) => {
  let str = reader.readLine();

  str = str.replace(/\s+/g, '');

  let length = str.length;
  let rows = Math.floor(Math.sqrt(length));
  let columns = Math.ceil(Math.sqrt(length));

  let encodedWords = new Array(columns).fill('');

  for (let i = 0; i < length; i++) {
    encodedWords[i % columns] += str.charAt(i);
  }

  console.log(encodedWords.join(' '));
};

read().then(solve);
