// #todo

'use strict';
/**
 * Add together all the digits in a number.
 * If the number is negative, the sum will be negative.
 *
 * @param {number} [toSum=0] - The number who's digits will be summed.
 * @returns {number} The sum of all digits in toSum.
 */

/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 *
 * @example
 * isPalindrome('racecar'); // -> true
 *
 * @example
 * isPalindrome('dog'); // -> false
 */
const isPalindrome = (toCheck) => {
  if (typeof toCheck !== 'string') return false;
  let result = toCheck.split('').reverse().join('');
  if (result === toCheck) return true;
  return false;
};

describe('Checks if a string is a palindrome', () => {
  describe('Returns true if the string is a palindrome', () => {
    it('Checks if the string "apa" is a palindrome', () => {
      const expected = true;
      const actual = isPalindrome('apa');
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Returns false if the string passed is not a palindrome', () => {
    it('Checks if the string "asdf" is a palindrome', () => {
      const expected = false;
      const actual = isPalindrome('asdf');
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Returns true if the argument passed is empty', () => {
    it('Checks if the string "" is a palindrome', () => {
      const expected = true;
      const actual = isPalindrome('');
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Returns false if the argument passed is not a string', () => {
    it('Checks if the string "" is a palindrome', () => {
      const expected = false;
      const actual = isPalindrome(123);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
