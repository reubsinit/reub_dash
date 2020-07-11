import every from '../../src/array/every';

/* eslint-disable require-jsdoc */

describe('every', () => {
  function isBigEnough(element) {
    return element >= 10;
  }

  let rd;
  let nativeEvery;
  let numbers;

  it('should confirm every element >= 10', () => {
    numbers = [12, 54, 18, 130, 44];
    rd = every(numbers, isBigEnough);
    nativeEvery = numbers.every(isBigEnough);

    expect(rd).toEqual(nativeEvery);
  });

  it('should deny every element >= 10', () => {
    numbers = [12, 5, 8, 130, 44];
    rd = every(numbers, isBigEnough);
    nativeEvery = numbers.every(isBigEnough);

    expect(rd).toEqual(nativeEvery);
  });

  it('should modify array items and return true', () => {
    function cb(elem, index, arr) {
      arr[index+1] -= 1;
      return elem < 2;
    }
    rd = every([1, 2, 3, 4], cb);
    nativeEvery = [1, 2, 3, 4].every(cb);

    expect(rd).toEqual(nativeEvery);
  });

  it('should append new array items and return false', () => {
    function cb(elem, index, arr) {
      arr[index+1] -= 1;
      return elem < 2;
    }
    rd = every([1, 2, 3, 4], cb);
    nativeEvery = [1, 2, 3, 4].every(cb);

    expect(rd).toEqual(nativeEvery);
  });

  it('should delete array items and return true', () => {
    function cb(elem, index, arr) {
      arr.pop();
      return elem < 4;
    }
    rd = every([1, 2, 3, 4], cb);
    nativeEvery = [1, 2, 3, 4].every(cb);

    expect(rd).toEqual(nativeEvery);
  });
});
