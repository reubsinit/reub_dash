import {compare} from '../helpers';

describe('flat', () => {
  it('should flatten array with depth of 1', () => {
    compare('flat', [1, 2, [3, 4, [5, 6]]]);
  });

  it('should flatten array with depth of 2', () => {
    compare('flat', [1, 2, [3, 4, [5, 6]], [[7, 8, [[10]]]]], {arg: 2});
  });

  it('should flatten array with depth of infinity', () => {
    compare('flat', [1, 2, [3, 4, [5, 6]], [[7, 8, [[10]]]]], {arg: Infinity});
  });
});
