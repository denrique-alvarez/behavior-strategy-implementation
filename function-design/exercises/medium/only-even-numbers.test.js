// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */
const stub = (arr1 = []) => {
  if (!Array.isArray(arr1)) return 'Pass an array as argument'
  const arr2 = arr1.filter(onlyEven => {
    return onlyEven % 2 === 0 && typeof onlyEven === 'number';
  });
  return arr2;
};

/*
  1. Create a filter to look for particular element.
  2. Loop through all the elements in the array.
  3. Set a condition and return only those elements that meet the condition.
  4. Store those elements in a new array.
  5. Make sure the return value is a number.
*/

for (const solution of [
  // secretSolution,
  stub
]) {
  describe(solution.name + ': returns an array of only even numbers', () => {
    describe('Default values', () => {
      it('[] --> []', () => {
        const expected = [];
        const actual = solution([]);
        expect(actual).toEqual(expected);
      });
      it('No argument --> []', () => {
        const expected = [];
        const actual = solution();
        expect(actual).toEqual(expected);
      });
    });
    describe('Only even numbers', () => {
      it('[2, 4, 6, 8, 10] --> [2, 4, 6, 8, 10]', () => {
        const expected = [2, 4, 6, 8, 10];
        const actual = solution([2, 4, 6, 8, 10]);
        expect(actual).toEqual(expected);
      });
    });
    describe('Only odd numbers', () => {
      it('[1, 3, 5, 7, 9] --> [1, 3, 5, 7, 9]', () => {
        const expected = [];
        const actual = solution([1, 3, 5, 7, 9]);
        expect(actual).toEqual(expected);
      });
    });
    describe('Mixed numbers', () => {
      it('[1, 4, 5, 10, 9, 46, 21, 48] --> [4, 10, 46, 48]', () => {
        const expected = [4, 10, 46, 48];
        const actual = solution([1, 4, 5, 10, 9, 46, 21, 48]);
        expect(actual).toEqual(expected);
      });
    });
    describe('Different types of elements', () => {
      it('[null, "hola", NaN, true] --> []', () => {
        const expected = [];
        const actual = solution([null, "hola", NaN, true]);
        expect(actual).toEqual(expected);
      });
    });
    describe('Passing something other than an array', () => {
      it('true --> "Pass an array as argument"', () => {
        const expected = "Pass an array as argument";
        const actual = solution(true);
        expect(actual).toEqual(expected);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
