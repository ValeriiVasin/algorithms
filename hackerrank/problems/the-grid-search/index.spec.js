import { isPattern, hasPattern } from './index';

describe('The grid search', () => {
  const grid = ['123', '456', '789'];

  describe('isPattern()', () => {
    it('works for simple horizontal', () => {
      expect(isPattern(grid, ['12'], 0, 0)).toBe(true);
      expect(isPattern(grid, ['89'], 2, 1)).toBe(true);
      expect(isPattern(grid, ['789'], 2, 0)).toBe(true);
    });

    it('works for simple vertical', () => {
      expect(isPattern(grid, ['1', '4'], 0, 0)).toBe(true);
      expect(isPattern(grid, ['12', '45'], 0, 0)).toBe(true);
      expect(isPattern(grid, ['6', '9'], 1, 2)).toBe(true);
    });

    it('works for multi-dimensional patterns', () => {
      expect(isPattern(grid, ['12', '45'], 0, 0)).toBe(true);
      expect(isPattern(grid, ['56', '89'], 1, 1)).toBe(true);
    });
  });

  describe('hasPattern()', () => {
    it('works for simple horizontal', () => {
      expect(hasPattern(grid, ['12'])).toBe(true);
      expect(hasPattern(grid, ['89'])).toBe(true);
      expect(hasPattern(grid, ['789'])).toBe(true);
      expect(hasPattern(grid, ['99'])).toBe(false);
    });

    it('works for simple vertical', () => {
      expect(hasPattern(grid, ['1', '4'])).toBe(true);
      expect(hasPattern(grid, ['12', '45'])).toBe(true);
      expect(hasPattern(grid, ['6', '9'])).toBe(true);
    });

    it('works for multi-dimensional patterns', () => {
      expect(hasPattern(grid, ['12', '45'])).toBe(true);
      expect(hasPattern(grid, ['56', '89'])).toBe(true);
    });
  });
});
