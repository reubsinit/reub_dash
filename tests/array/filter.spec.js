import filter from '../../src/array/filter';

/* eslint-disable require-jsdoc */
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

function testFunction(toFilter, cb, mutate = false) {
  const rd = filter(!mutate ? toFilter : [...toFilter], cb);
  const nativeFilter = toFilter.filter(cb);

  expect(rd).toEqual(nativeFilter);
}

describe('filter', () => {
  it('should filter each word by word.length > 6', () => {
    function greaterThan6(word) {
      return word.length > 6;
    }
    testFunction(words, greaterThan6);
  });

  it('should filter each number >= 10', () => {
    function isBigEnough(value) {
      return value >= 10;
    }
    testFunction([12, 5, 8, 130, 44], isBigEnough);
  });

  it('should filter all prime numers', () => {
    function isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num > 1;
    }
    testFunction([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], isPrime);
  });

  it('should filter invalid entries from JSON', () => {
    function filterByID(item) {
      if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
      }
      return false;
    }

    const toFilter = [
      {id: 15},
      {id: -1},
      {id: 0},
      {id: 3},
      {id: 12.2},
      { },
      {id: null},
      {id: NaN},
      {id: 'undefined'},
    ];

    testFunction(toFilter, filterByID);
  });

  it('should search an arry', () => {
    function cb(query) {
      return function(ele) {
        return ele.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      };
    }

    testFunction(['apple', 'banana', 'grapes', 'mango', 'orange'], cb('an'));
  });

  it('should modify array items', () => {
    function cb(word, index, arr) {
      arr[index+1] +=' extra';
      return word.length < 6;
    }

    testFunction(words, cb, true);
  });

  it('should append new array items', () => {
    function cb(word, index, arr) {
      arr.push('new');
      return word.length < 6;
    }

    testFunction(words, cb, true);
  });

  it('should delete array items', () => {
    function cb(word, index, arr) {
      arr.pop();
      return word.length < 6;
    }

    testFunction(words, cb, true);
  });
});
