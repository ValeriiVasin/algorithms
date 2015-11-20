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
const getRealRanges = require('../build/2s-complement').getRealRanges;
const getRealRangesMap = require('../build/2s-complement').getRealRangesMap;

describe('2s-complement', () => {
  describe('toComplement()', () => {
    for (let key of dictionary.keys()) {
      it(`toComplement(${key}, 4)`, () => {
        expect(toComplement(key, 4)).toBe(dictionary.get(key));
      });
    }
  });

  describe('getting real ranges', () => {
    let ranges = [
      { start: -2, end: -1 },
      { start: -3, end: 0 },
      { start: 1, end: 3 },
      { start: 3, end: 5 }
    ];

    it('getting real ranges', () => {
      expect(getRealRanges(ranges)).toEqual([
        { start: -3, end: -2 },
        { start: -2, end: -1 },
        { start: -1, end: 0 },
        { start: 1, end: 3 },
        { start: 3, end: 5 },
      ]);
    });

    it('get real ranges map', () => {
      expect([...getRealRangesMap(ranges)]).toEqual([
        [ -3, -2 ],
        [ -2, -1 ],
        [ -1, 0 ],
        [ 1,  3 ],
        [ 3,  5 ]
      ]);
    });
  });
});
