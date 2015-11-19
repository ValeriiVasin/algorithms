'use strict';

require("babel-core/register");

const BigInt = require('../../lib/bigint').BigInt;

describe('The grid search', () => {
  it('add()', () => {
    let value = new BigInt(5);

    expect(value.add(3).toString()).toBe('8');
    expect(value.add(198).toString()).toBe('203');
  });

  it('multiply()', () => {
    let tests = [
      [1, 2],
      [123, 45],
      [1234, 5678],
      [1111, 2222]
    ];

    for (let test of tests) {
      expect(BigInt.from(test[0]).multiply(test[1]).toString()).toBe(String(test[0] * test[1]));
    }
  });

  it('pow()', () => {
    let tests = [1, 3, 10, 382, 998, 1322];

    for (let i = 0; i < tests.length; i++) {
      let number = tests[i];
      let power = i;

      expect(BigInt.from(number).pow(i).toString()).toBe(String(Math.pow(number, i)));
    }
  });
});
