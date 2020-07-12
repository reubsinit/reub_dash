import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('findIndex', () => {
  it('should find index of first prime number', () => {
    function isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num > 1;
    }

    compare('findIndex', [4, 6, 7, 9, 12], {cb: isPrime});
  });

  it('should not find index of number', () => {
    function cb(num) {
      return num == 89;
    }

    compare('findIndex', [4, 6, 7, 9, 12], {cb});
  });
});
