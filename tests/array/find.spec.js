import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('find', () => {
  it('should find first element > 10', () => {
    function cb(val) {
      return val > 10;
    }

    compare('find', [5, 12, 8, 130, 44], cb);
  });

  it('should find an object in an array by one of its properties', () => {
    function isCherries(fruit) {
      return fruit.name === 'cherries';
    }

    const inventory = [
      {name: 'apples', quantity: 2},
      {name: 'bananas', quantity: 0},
      {name: 'cherries', quantity: 5},
    ];

    compare('find', inventory, isCherries);
  });

  it('should find the first prime number', () => {
    function isPrime(element, index, array) {
      let start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }

    compare('find', [4, 6, 8, 12], isPrime);
  });
});
