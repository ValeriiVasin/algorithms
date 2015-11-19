'use strict';

require("babel-core/register");

const BigInt = require('../../lib/bigint').BigInt;

fdescribe('The grid search', () => {
  it('add()', () => {
    let value = new BigInt(5);

    expect(value.add(3).toString()).toBe('8');
    expect(value.add(198).toString()).toBe('203');
  });
});
