import { getBiggestPrime } from './index';

describe('euler-003', () => {
  it('works for euler task', () => {
    expect(getBiggestPrime(600851475143)).toBe(6857);
  });
});
