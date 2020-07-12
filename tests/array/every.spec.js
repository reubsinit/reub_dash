import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('every', () => {
  function isBigEnough(element) {
    return element >= 10;
  }

  it('should confirm every element >= 10', () => {
    compare('every', [12, 54, 18, 130, 44], {cb: isBigEnough});
  });

  it('should deny every element >= 10', () => {
    compare('every', [12, 5, 8, 130, 44], {cb: isBigEnough});
  });

  it('should modify array items and return true', () => {
    function cb(elem, index, arr) {
      arr[index+1] -= 1;
      return elem < 2;
    }

    compare('every', [1, 2, 3, 4], {cb, mutate: true});
  });

  it('should append new array items and return false', () => {
    function cb(elem, index, arr) {
      arr[index+1] -= 1;
      return elem < 2;
    }

    compare('every', [1, 2, 3, 4], {cb, mutate: true});
  });

  it('should delete array items and return true', () => {
    function cb(elem, index, arr) {
      arr.pop();
      return elem < 4;
    }

    compare('every', [1, 2, 3, 4], {cb, mutate: true});
  });
});
