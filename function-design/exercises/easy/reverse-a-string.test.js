// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = (toReverse = '') => {
  if (typeof toReverse !== 'string') return 'Enter a string';
  if (toReverse.length > 20) return 'Enter a shorter string';
  return toReverse.split('').reverse().join('');
};

/*
  1. Set a parameter and its default value to a string.
  2. Take the argument and apply split-reverse-join to reorganize the elementes. Strings and arrays can be treated similarly.
  3. Split takes a string a divides it into the specific values given, in this case ''.
  4. .reverse, inverts the orders of the elements in the array.
  5. .join turns an array into a string setting the value given in between elements. In this case, empty string ''.
*/

for (const solution of [
  // secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    it('Number instead of string', () => {
      expect(solution(5)).toEqual('Enter a string');
    });
    it('Boolean instead of string', () => {
      expect(solution(true)).toEqual('Enter a string');
    });
    it('Object instead of string', () => {
      expect(solution(null)).toEqual('Enter a string');
    });
    it('NaN instead of string', () => {
      expect(solution(NaN)).toEqual('Enter a string');
    });
    it('The string is longer than 20 characters', () => {
      expect(solution('asdfasdfasdfasdfasdfasdf')).toEqual('Enter a shorter string');
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
