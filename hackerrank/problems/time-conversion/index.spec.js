'use strict';

import { convertTime } from './index';

describe('time-conversion', () => {
  it('works correctly for time before afternoon', () => {
    expect(convertTime('03:20:20AM')).toBe('03:20:20');
  });

  it('works correctly for time after afternoon', () => {
    expect(convertTime('03:20:20PM')).toBe('15:20:20');
  });

  describe('12AM/PM', () => {
    it('works correctly for time before afternoon', () => {
      expect(convertTime('12:20:20AM')).toBe('00:20:20');
    });

    it('works correctly for time after afternoon', () => {
      expect(convertTime('12:20:20PM')).toBe('12:20:20');
    });
  });
});
