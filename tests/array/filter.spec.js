import filter from '../../src/array/filter';

/* eslint-disable require-jsdoc */

let filtered;

beforeEach(() => {
  filtered = undefined;
});

describe('filter', () => {
  it('filter word length > 6', () => {
    function greaterThan6(word) {
      return word.length > 6;
    }
    filtered = filter(
        ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
        greaterThan6,
    );
    expect(filtered).toEqual(['exuberant', 'destruction', 'present']);
  });

  it('filter number >= 10', () => {
    function isBigEnough(value) {
      return value >= 10;
    }
    filtered = filter([12, 5, 8, 130, 44], isBigEnough);
    expect(filtered).toEqual([12, 130, 44]);
  });
});
