import { getPrimeFactors } from './index';

describe('euler-003', () => {
  it('works for euler task', () => {
    expect(getPrimeFactors(600851475143)).toBe(6857);
  });
});
