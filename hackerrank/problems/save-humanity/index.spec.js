import { createSuffixesArray, isMatching, findMatches } from './index';

describe('save-humanity', () => {
  it('createSuffixesArray()', () => {
    expect(createSuffixesArray('abb')).toEqual([
      { suffix: 'abb', index: 0 },
      { suffix: 'b', index: 2 },
      { suffix: 'bb', index: 1 }
    ]);
  });

  it('findMatches()', () => {
    expect(findMatches('abbab', 'ba')).toEqual([1, 2]);
    expect(findMatches('hello', 'world')).toBe(false);
    expect(findMatches('banana', 'nan')).toEqual([0, 2]);
  });

  it('isMatching()', () => {
    expect(isMatching('aa', 'aa')).toBe(true);
    expect(isMatching('ab', 'aa')).toBe(true);
    expect(isMatching('ab', 'ba')).toBe(false);
  });
});
