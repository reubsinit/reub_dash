import find from '../../src/array/find';

describe('find', () => {
  it('find first element > 10', () => {
    expect(find([5, 12, 8, 130, 44], (val) => val > 10)).toBe(12);
  });
});
