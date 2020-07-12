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

  // TODO: Investigate array mutations =\
  const reub_dash = rd[fn]([...values], ...args());
  const native = [...values][fn](...args());

  console.log(`rd: ${JSON.stringify(reub_dash)}\nnative: ${JSON.stringify(native)}`);

  expect(reub_dash).toEqual(native);
}
