import { isMatch } from './10-regular-expression-matching';

/* eslint-disable jest/no-disabled-tests */

xdescribe('exact matches', () => {
  it('matches', () => {
    expect(isMatch('aa', 'aa')).toBe(true);
  });

  it('does not match', () => {
    expect(isMatch('aa', 'a')).toBe(false);
  });
});

xdescribe('just dot', () => {
  it('matches single dot', () => {
    expect(isMatch('ab', 'a.')).toBe(true);
  });

  it('matches few dots', () => {
    expect(isMatch('aab', '.a.')).toBe(true);
  });

  it('does not match', () => {
    expect(isMatch('aa', 'a..')).toBe(false);
  });
});

xdescribe('star', () => {
  it('char repeat matches', () => {
    expect(isMatch("aa", "a*")).toBe(true);
  });

  it('char repeat does not match', () => {
    expect(isMatch("abc", "a*")).toBe(false);
  });

  it('wildcard', () => {
    expect(isMatch("aa", ".*")).toBe(true);
  });

  it('wildcard surrounded by chars matches', () => {
    expect(isMatch("aa", "a.*a")).toBe(true);
  });

  it('wildcard surrounded by chars does not match', () => {
    expect(isMatch("aa", "a.*b")).toBe(false);
  });
});

test.skip('sample data', () => {
  expect(isMatch("aa","a")).toBe(false);
  expect(isMatch("aa","aa")).toBe(true);
  expect(isMatch("aaa","aa")).toBe(false);
  expect(isMatch("aa", "a*")).toBe(true);
  expect(isMatch("aa", ".*")).toBe(true);
  expect(isMatch("ab", ".*")).toBe(true);
  expect(isMatch("aab", "c*a*b")).toBe(true);
});
