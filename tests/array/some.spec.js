import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('some', () => {
  it('should find one number % 2 === 0', () => {
    function cb(element) {
      return element % 2 === 0;
    }

    compare('some', [1, 2, 3, 4, 5], {cb});
  });
});
