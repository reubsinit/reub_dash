import memoize from '../../src/function/memoize';

describe('memoize', () => {
  const cb = jest.fn(function cb(num1, num2, num3) {
    return num1 + num2 + num3;
  });


  it('should only run function once', () => {
    const fn = memoize(cb);
    let i = 0;

    while (i++ < 2) {
      fn(1, 2, 3);
    }
    expect(cb.mock.calls.length).toBe(1);
  });

  it('should return cached value', () => {
    const fn = memoize(cb);

    expect(fn(1, 2, 3)).toBe(fn(1, 2, 3));
  });
});
