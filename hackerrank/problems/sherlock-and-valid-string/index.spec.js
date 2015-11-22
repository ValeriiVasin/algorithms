import { couldBeConvertedToValid } from './index';

describe('sherlock-and-valid-string', () => {
  it('one letter is valid', () => {
    expect(couldBeConvertedToValid('a')).toBe(true);
  });

  it('string is already valid', () => {
    expect(couldBeConvertedToValid('aabbcc')).toBe(true);
  });

  it('letter could be removed', () => {
    expect(couldBeConvertedToValid('aabbccd')).toBe(true);
    expect(couldBeConvertedToValid('abbbb')).toBe(true);
  });

  it('letter count could be decreased', () => {
    expect(couldBeConvertedToValid('aabbccddd')).toBe(true);
    expect(couldBeConvertedToValid('abb')).toBe(true);
  });

  it('cant be valid', () => {
    expect(couldBeConvertedToValid('abcddd')).toBe(false);
    expect(couldBeConvertedToValid('aabbccde')).toBe(false);
    expect(couldBeConvertedToValid('abcddee')).toBe(false);
  });
});
