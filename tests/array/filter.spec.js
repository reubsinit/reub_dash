import filter from '../../src/array/filter';

/* eslint-disable require-jsdoc */

let filtered;

beforeEach(() => {
  filtered = undefined;
});

describe('filter', () => {
  it('filter word length > 6', () => {
    function greaterThan6(word) {
      return word.length > 6;
    }
    filtered = filter(
        ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
        greaterThan6,
    );
    expect(filtered).toEqual(['exuberant', 'destruction', 'present']);
  });

  it('filter number >= 10', () => {
    function isBigEnough(value) {
      return value >= 10;
    }
    filtered = filter([12, 5, 8, 130, 44], isBigEnough);
    expect(filtered).toEqual([12, 130, 44]);
  });

  it('filter all prime numers', () => {
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    function isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num > 1;
    }

    filtered = filter(array, isPrime);

    expect(filtered).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it('filter invalid entries from JSON', () => {
    const arr = [
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

    let invalidEntries = 0;

    function filterByID(item) {
      if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
      }
      invalidEntries++;
      return false;
    }

    filtered = filter(arr, filterByID);

    expect(filtered).toEqual([{id: 15}, {id: -1}, {id: 3}, {id: 12.2}]);
    expect(invalidEntries).toBe(5);
  });

  it('search an arry', () => {
    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    function filterItems(arr, query) {
      return filter(arr, function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }
    filtered = filterItems(fruits, 'ap');
    expect(filtered).toEqual(['apple', 'grapes']);
    filtered = filterItems(fruits, 'an');
    expect(filtered).toEqual(['banana', 'mango', 'orange']);
  });

  it('affect initial array', () => {
    const refData = [
      'spray', 'limit', 'exuberant', 'destruction', 'elite', 'present',
    ];
    let words = [...refData];

    // Modifying each word
    filtered = filter(words, (word, index, arr) => {
      arr[index+1] +=' extra';
      return word.length < 6;
    });

    expect(filtered).toEqual(['spray']);

    // Appending new words
    words = [...refData];
    filtered = filter(words, (word, index, arr) => {
      arr.push('new');
      return word.length < 6;
    });

    // Deleting words
    expect(filtered).toEqual(['spray', 'limit', 'elite']);
    words = [...refData];
    filtered = filter(words, (word, index, arr) => {
      arr.pop();
      return word.length < 6;
    });

    expect(filtered).toEqual(['spray', 'limit']);
  });
});
