import findIndex from '../../src/array/findIndex';

/* eslint-disable require-jsdoc */

describe('findIndex', () => {
  it('find index of prime numer', () => {
    function isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num > 1;
    }

    expect(findIndex([4, 6, 8, 9, 12], isPrime)).toBe(-1);
    expect(findIndex([4, 6, 7, 9, 12], isPrime)).toBe(2);
  });
});
