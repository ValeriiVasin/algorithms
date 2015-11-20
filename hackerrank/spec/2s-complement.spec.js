'use strict';

const dictionary = new Map([
  [ 7, '0111'],
  [ 6, '0110'],
  [ 5, '0101'],
  [ 4, '0100'],
  [ 3, '0011'],
  [ 2, '0010'],
  [ 1, '0001'],
  [ 0, '0000'],
  [-1, '1111'],
  [-2, '1110'],
  [-3, '1101'],
  [-4, '1100'],
  [-5, '1011'],
  [-6, '1010'],
  [-7, '1001'],
  [-8, '1000']
]);

const toComplement = require('../build/2s-complement').toComplement;

describe('2s-complement', () => {
  for (let key of dictionary.keys()) {
    it(`toComplement(${key}, 4)`, () => {
      expect(toComplement(key, 4)).toBe(dictionary.get(key));
    });
  }
});
