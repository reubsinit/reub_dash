import every from '../../src/array/every';

/* eslint-disable require-jsdoc */

describe('every', () => {
  it('sanity test', () => {
    return;
  });

  it('every element >= 10', () => {
    function isBigEnough(element) {
      return element >= 10;
    }
    expect(every([12, 5, 8, 130, 44], isBigEnough)).toBe(false);
    expect(every([12, 54, 18, 130, 44], isBigEnough)).toBe(true);
  });
});
