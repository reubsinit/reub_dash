import filter from '../../src/array/filter';

/* eslint-disable require-jsdoc */
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
let toFilter;
let rd;
let nativeFilter;

beforeEach(() => {
  toFilter = undefined;
});

describe('filter', () => {
  it('should filter each word by word.length > 6', () => {
    function greaterThan6(word) {
      return word.length > 6;
    }

    toFilter = words;


    rd = filter(toFilter, greaterThan6);
    nativeFilter = toFilter.filter(greaterThan6);

    expect(rd).toEqual(nativeFilter);
  });

  it('should filter each number >= 10', () => {
    function isBigEnough(value) {
      return value >= 10;
    }

    toFilter = [12, 5, 8, 130, 44];

    rd = filter(toFilter, isBigEnough);
    nativeFilter = toFilter.filter(isBigEnough);

    expect(rd).toEqual(nativeFilter);
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

    toFilter = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    rd = filter(toFilter, isPrime);
    nativeFilter = toFilter.filter(isPrime);

    expect(rd).toEqual(nativeFilter);
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

    rd = filter(toFilter, filterByID);
    nativeFilter = toFilter.filter(filterByID);

    expect(rd).toEqual(nativeFilter);
  });

  it('should search an arry', () => {
    function nativeFilter(array, query) {
      return array.filter(function(ele) {
        return ele.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }

    function rdFilter(array, query) {
      return filter(array, function(ele) {
        return ele.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }

    toFilter = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    rd = rdFilter(toFilter, 'an');
    nativeFilter = nativeFilter(toFilter, 'an');

    expect(rd).toEqual(nativeFilter);
  });

  it('should modify array items', () => {
    function cb(word, index, arr) {
      arr[index+1] +=' extra';
      return word.length < 6;
    }

    rd = filter([...words], cb);
    nativeFilter = [...words].filter(cb);

    expect(rd).toEqual(nativeFilter);
  });

  it('should append new array items', () => {
    function cb(word, index, arr) {
      arr.push('new');
      return word.length < 6;
    }

    rd = filter([...words], cb);
    nativeFilter = [...words].filter(cb);

    expect(rd).toEqual(nativeFilter);
  });

  it('should delete array items', () => {
    function cb(word, index, arr) {
      arr.pop();
      return word.length < 6;
    }

    rd = filter([...words], cb);
    nativeFilter = [...words].filter(cb);

    expect(rd).toEqual(nativeFilter);
  });
});
