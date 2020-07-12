import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('reduceRight', () => {
  it('should reducd right', () => {
    function cb(prev, current) {
      return prev + current;
    }

    compare('reduceRight', ['1', '2', '3', '4', '5'], {cb});
  });

  it('should flatten an array', () => {
    function cb(a, b) {
      return a.concat(b);
    }

    compare('reduceRight', [[0, 1], [2, 3], [4, 5]], {cb, args: []});
  });
});
