import { timeToString } from './index';

describe('timeToString()', () => {
  it('converts time correctly', () => {
    expect(timeToString(5, 0)).toBe(`five o' clock`);
    expect(timeToString(5, 1)).toBe('one minute past five');
    expect(timeToString(5, 10)).toBe('ten minutes past five');
    expect(timeToString(5, 30)).toBe('half past five');
    expect(timeToString(5, 40)).toBe('twenty minutes to six');
    expect(timeToString(5, 45)).toBe('quarter to six');
    expect(timeToString(5, 47)).toBe('thirteen minutes to six');
    expect(timeToString(5, 28)).toBe('twenty eight minutes past five');
    expect(timeToString(12, 59)).toBe('one minute to one');
  });
});
