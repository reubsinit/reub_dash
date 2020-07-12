import rd from '../../src';

export function compare(fn, values, options = {}) {
  function args() {
    const result = [];
    if (options.cb && options.args || options.cb) {
      result.push(options.cb);
    }
    if (options.args) {
      const arg = typeof options.args == 'object' && !Array.isArray(options.args) ? {...options.args} : options.args;
      result.push(arg);
    }
    return result;
  }
  // Got an issue in the above function with object references
  const reub_dash = rd[fn](!options.mutate ? values : [...values], ...args());
  const native = values[fn](...args());
  expect(reub_dash).toEqual(native);
}
