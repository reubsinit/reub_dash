import rd from '../../src';

export function compare(fn, values, cb, mutate = false) {
  const reub_dash = rd[fn](!mutate ? values : [...values], cb);
  const native = values[fn](cb);
  expect(reub_dash).toEqual(native);
}
