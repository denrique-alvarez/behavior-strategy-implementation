// #todo

'use strict';

/**
 * Add together all the digits in a number.
 * If the number is negative, the sum will be negative.
 *
 * @param {number} [toSum=0] - The number who's digits will be summed.
 * @returns {number} The sum of all digits in toSum.
 *
 * @example
 * sumOfDigits(12); // -> 3
 *
 * @example
 * sumOfDigits(100); // -> 1
 *
 * @example
 * sumOfDigits(42); // -> 6
 *
 * @example
 * sumOfDigits(312); // -> 6
 */
const sumOfDigits = (toSum) => {
  let sum = 0;
  const toString = String(toSum);
  const toArr = toString.split('');

  for (let num of toArr) {
    num = Number(num);
    sum = sum + num;
  }
  return sum;
};

describe('Returns the sum of the digits of a given number', () => {
  describe('Returns the final sum given a number with multiple digits', () => {
    it('1234 -> 10', () => {
      const expected = 10;
      const actual = sumOfDigits(1234);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Returns the same number given a single digit number', () => {
    it('5 -> 5', () => {
      const expected = 5;
      const actual = sumOfDigits(5);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
