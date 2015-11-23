import { createSuffixesArray, createLCPArray, getNthSubstring } from './index';

describe('find-strings', () => {
  it('createSuffixesArray()', () => {
    expect(createSuffixesArray(['aab', 'aac'])).toEqual(['aab', 'aac', 'ab', 'ac', 'b' , 'c']);
  });

  it('createLCPArray()', () => {
    expect(createLCPArray(['aab', 'aac', 'ab', 'ac', 'b' , 'c'])).toEqual([0, 2, 1, 1, 0, 0]);
  });

  it('getNthSubstring()', () => {
    let strings = ['aab', 'aac'];
    let suffixes = createSuffixesArray(strings);
    let lcp = createLCPArray(suffixes);

    // {"a", "aa", "aab", "aac", "ab", "ac", "b", "c"}

    expect(getNthSubstring(suffixes, lcp, 1)).toBe('a');
    expect(getNthSubstring(suffixes, lcp, 2)).toBe('aa');
    expect(getNthSubstring(suffixes, lcp, 3)).toBe('aab');
    expect(getNthSubstring(suffixes, lcp, 4)).toBe('aac');
    expect(getNthSubstring(suffixes, lcp, 5)).toBe('ab');
    expect(getNthSubstring(suffixes, lcp, 6)).toBe('ac');
    expect(getNthSubstring(suffixes, lcp, 7)).toBe('b');
    expect(getNthSubstring(suffixes, lcp, 8)).toBe('c');
    expect(getNthSubstring(suffixes, lcp, 9)).toBe(false);
  });
});
