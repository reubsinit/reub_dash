import rd from '../../src';

export function compare(fn, values, cb, mutate = false) {
  expect(rd[fn](!mutate ? values : [...values], cb)).toEqual(values[fn](cb));
}
