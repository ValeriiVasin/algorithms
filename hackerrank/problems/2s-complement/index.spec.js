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

import { onesFromZero, diffFromZero, onesFromMinimum, diff } from './index';

describe('2s-complement', () => {
  it('onesFromZero()', () => {
    expect(onesFromZero(1)).toBe(1);
    expect(onesFromZero(2)).toBe(2);
    expect(onesFromZero(3)).toBe(4);
    expect(onesFromZero(4)).toBe(5);
    expect(onesFromZero(5)).toBe(7);
    expect(onesFromZero(6)).toBe(9);
    expect(onesFromZero(7)).toBe(12);
    expect(onesFromZero(8)).toBe(13);
  });

  it('diffFromZero()', () => {
    expect(diffFromZero(0, 0)).toBe(0);
    expect(diffFromZero(1, 1)).toBe(1);
    expect(diffFromZero(0, 1)).toBe(1);
    expect(diffFromZero(2, 7)).toBe(11);

    expect(diffFromZero(Math.pow(2, 4) - 1, Math.pow(2, 4) - 1)).toBe(4);
    expect(diffFromZero(Math.pow(2, 31) - 1, Math.pow(2, 31) - 1)).toBe(31);
  });

  it('onesFromMinimum()', () => {
    expect(onesFromMinimum(-8, 4)).toBe(1);
    expect(onesFromMinimum(-7, 4)).toBe(3);
    expect(onesFromMinimum(-6, 4)).toBe(5);
    expect(onesFromMinimum(-5, 4)).toBe(8);
    expect(onesFromMinimum(-1, 4)).toBe(20);

    expect(onesFromMinimum(0, 4)).toBe(20);
    expect(onesFromMinimum(1, 4)).toBe(21);

    expect(onesFromMinimum(-Math.pow(2, 31), 32)).toBe(1);
  });

  it('diff()', () => {
    expect(diff(0, 0)).toBe(0);
    expect(diff(1, 1)).toBe(1);
    expect(diff(0, 1)).toBe(1);
    expect(diff(2, 7)).toBe(11);

    expect(diff(-8, -8, 4)).toBe(1);
    expect(diff(-8, -7, 4)).toBe(3);

    expect(diff(-2, 0, 32)).toBe(63);
    expect(diff(-3, 4, 32)).toBe(99);
    expect(diff(-1, 4, 32)).toBe(37);

    expect(diff(-Math.pow(2, 31), -Math.pow(2, 31), 32)).toBe(1);
    expect(diff(-Math.pow(2, 31), -Math.pow(2, 31) + 1, 32)).toBe(3);
    expect(diff(-1, 0, 32)).toBe(32);
  });
});
