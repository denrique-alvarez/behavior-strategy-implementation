// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const add = (x, y) => {
  return x + y;
};

describe('Adds two numbers together', () => {
  describe('Adds two integers', () => {
    it('Adds 5 and 9', () => {
      const expected = 14;
      const actual = add(5, 9);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Adds two decimal numbers', () => {
    it('Adds 1.34 and 4.67', () => {
      const expected = 6.01;
      const actual = add(1.34, 4.67);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
