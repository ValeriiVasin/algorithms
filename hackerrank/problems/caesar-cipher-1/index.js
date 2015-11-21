'use strict'

// https://www.hackerrank.com/challenges/caesar-cipher-1

import { read } from '../../lib/read';

const solve = (reader) => {
  const length = reader.readNumber();
  const str = reader.readLine();
  const number = reader.readNumber();

  console.log(encode(str, number));
};

const encode = (str, number) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;
  number = number % alphabetLength;

  if (number === 0) {
    return str;
  }

  let encoder = new Map();
  for (let i = 0; i < alphabetLength; i++) {
    let letter = alphabet.charAt(i);
    let encoded = alphabet.charAt((i + number) % alphabetLength);

    encoder.set(letter, encoded).set(letter.toUpperCase(), encoded.toUpperCase());
  }

  let result = '';
  for (let letter of str) {
    result += encoder.has(letter) ? encoder.get(letter) : letter;
  }

  return result;
};

read().then(solve);
