// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */
const stub = (start = 0) => {
  if (typeof start !== 'number') return 'Enter a number';
  if (start < 0) return 'Invalid number';
  if (!Number.isInteger(start)) return 'Start must be integer';
  let number = [];
  for (let i = start; 0 <= i; i--) {
    number.push(i);
  }
  return number;
};

/*
 1. Create the parameter and set the default value to zero.
 2. Create a veriable named 'number' which will be returned with the array.
 3. Iterate as many times as the start value until zero and send every value to the number array.
 4. Return the array with all numbers frome biggest to smallest.
*/

for (const solution of [
  // secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    it('string -> "Enter a number"', () => {
      expect(solution('asdf')).toEqual('Enter a number');
    });
    it('negative -> "Invalid number"', () => {
      expect(solution(-5)).toEqual('Invalid number');
    });
    it('decimal -> "Start must be integer', () => {
      expect(solution(1.3352)).toEqual('Start must be integer');
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }
