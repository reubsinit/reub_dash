import once from '../../src/function/once';

/* eslint-disable require-jsdoc */

describe('once', () => {
  it('should only run once', () => {
    const cb = jest.fn();
    const fn = once(cb);
    let i = 0;

    while (i++ < 2) {
      fn();
    }

    expect(cb.mock.calls.length).toBe(1);
  });

  it('should only run once with accepted arguments', () => {
    const cb = jest.fn(function cb(num1, num2, num3) {
      return num1 + num2 + num3;
    });

    const fn = once(cb);


    const result = fn(1, 2, 3);

    expect(result).toBe(6);

    fn(1, 2, 3);

    expect(cb.mock.calls.length).toBe(1);
  });
});
