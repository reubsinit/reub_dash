import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('filter', () => {
  it('should multiple each element by 2', () => {
    function cb(x) {
      return x * 2;
    }

    compare('map', [1, 4, 9, 16], {cb});
  });

  it('should reform objects within an array', () => {
    function cb(obj) {
      const rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
    }

    const kvArray = [{key: 1, value: 10},
      {key: 2, value: 20},
      {key: 3, value: 30}];

    compare('map', kvArray, {cb});
  });

  it('should return an array with undefined', () => {
    function cb(num, index) {
      if (index < 3) {
        return num;
      }
    };

    compare('map', [1, 2, 3, 4], {cb});
  });

  it('should return all strings converted to numbers', () => {
    compare('map', ['1.1', '2.2e2', '3e300'], {cb: Number});
  });
});
