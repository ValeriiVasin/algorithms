'use strict';

const solution = require('../time-conversion');

describe('time-conversion', () => {
  it('works correctly for time before afternoon', () => {
    expect(solution('03:20:20AM')).toBe('03:20:20');
  });

  it('works correctly for time after afternoon', () => {
    expect(solution('03:20:20PM')).toBe('15:20:20');
  });

  describe('12AM/PM', () => {
    it('works correctly for time before afternoon', () => {
      expect(solution('12:20:20AM')).toBe('00:20:20');
    });

    it('works correctly for time after afternoon', () => {
      expect(solution('12:20:20PM')).toBe('12:20:20');
    });
  });
});

