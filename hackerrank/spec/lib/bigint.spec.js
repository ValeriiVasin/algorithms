'use strict';

require("babel-core/register");

const BigInt = require('../../lib/bigint').BigInt;

describe('The grid search', () => {
  it('add()', () => {
    let value = new BigInt(5);

    expect(value.add(3).toString()).toBe('8');
    expect(value.add(198).toString()).toBe('203');
  });

  fit('multiply()', () => {
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
});
