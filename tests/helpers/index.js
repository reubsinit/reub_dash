import rd from '../../src';

/* eslint-disable require-jsdoc */

export function compare(fn, values, options = {}) {
  function args() {
    const result = [];
    if (options.cb) {
      result.push(options.cb);
    }
    if (options.arg) {
      let arg;
      if (typeof options.arg == 'object' && !Array.isArray(options.arg)) {
        arg = {...options.arg};
      } else {
        arg = options.arg;
      }
      result.push(arg);
    }
    return result;
  }
  // Got an issue in the above function with object references
  const reub_dash = rd[fn](!options.mutate ? values : [...values], ...args());
  const native = values[fn](...args());

  expect(reub_dash).toEqual(native);
}
