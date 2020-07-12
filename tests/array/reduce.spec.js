import {compare} from '../helpers';

/* eslint-disable require-jsdoc */

describe('reduce', () => {
  it('should sum all numbers in array with no initial', () => {
    function cb(accumulator, currentValue) {
      return accumulator + currentValue;
    }

    compare('reduce', [1, 2, 3, 4], {cb});
  });

  it('should sum all numbers in array with initial', () => {
    function cb(accumulator, currentValue) {
      return accumulator + currentValue;
    }

    compare('reduce', [1, 2, 3, 4], {cb, arg: 10});
  });

  it('should flatten an array', () => {
    function cb(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    };

    compare('reduce', [[0, 1], [2, 3], [4, 5]], {cb, arg: []});
  });

  it('should count instances of values in an object', () => {
    function cb(allNames, name) {
      if (name in allNames) {
        allNames[name]++;
      } else {
        allNames[name] = 1;
      }
      return allNames;
    }

    compare('reduce', ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'], {cb, arg: {}});
  });

  it('should group objects by a property', () => {
    function cb(property) {
      return function(acc, obj) {
        const key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      };
    }

    const people = [
      {name: 'Alice', age: 21},
      {name: 'Max', age: 20},
      {name: 'Jane', age: 20},
    ];

    compare('reduce', people, {cb: cb('age'), arg: {}, mutate: true});
  });
});
