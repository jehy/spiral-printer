const _         = require('lodash'),
      getSpiral = require('../spiral');

describe('spiral extractor', () => {

  it('should process 1x1 spiral', () => {
    const spiral = [[1]];
    const expected = [1];
    const answer = getSpiral(spiral);
    if (!_.isEqual(answer, expected)) {
      throw new Error('Wrong answer!');
    }
  });

  it('should process 3x3 spiral', () => {

    const spiral = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [5, 4, 7, 8, 9, 6, 3, 2, 1];
    const answer = getSpiral(spiral).reverse();
    if (!_.isEqual(answer, expected)) {
      throw new Error('Wrong answer!');
    }
  });

  it('should process 5x5 spiral', () => {

    const spiral = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const expected = [13, 12, 17, 18, 19, 14, 9, 8, 7, 6, 11,
      16, 21, 22, 23, 24, 25, 20, 15, 10, 5, 4, 3, 2, 1];
    const answer = getSpiral(spiral).reverse();
    if (!_.isEqual(answer, expected)) {
      throw new Error('Wrong answer!');
    }
  });
});
