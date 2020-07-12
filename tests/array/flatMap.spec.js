import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('flatMap', () => {
  const numbers = [1, 2, 3, 4];

  it('should flatten array', () => {
    function cb(x) {
      return [x * 2];
    }
    compare('flatMap', numbers, {cb});
  });

  it('should flatten array one level deep', () => {
    function cb(x) {
      return [[x * 2]];
    }
    compare('flatMap', numbers, {cb});
  });

  it('should add and remove items from array', () => {
    function cb(n) {
      return (n < 0) ?
      [] : (n % 2 == 0) ?
      [n] : [n-1, 1];
    }

    compare('flatMap', [5, 4, -3, 20, 17, -33, -4, 18], {cb});
  });
});
