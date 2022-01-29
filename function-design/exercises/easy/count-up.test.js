// #todo

'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */
const stub = (max = 0) => {
  if (typeof max !== 'number') return 'Enter a number';
  if (max < 0) return 'Enter a positive number';
  if (!Number.isInteger(max)) return 'Enter an integer';
  if (max >= 1000000) return 'Enter a number smaller than 1000000';
  let number = [];
  for (let i = 0; i <= max; i++) {
    number.push(i);
  }
  return number;
};

/*
  1. Create a parameter and set its default value to zero.
  2. The parameter should be equal or greater than zero.
  3. Create a loop that will iterate a number of times equeal to the number of the value passed in the parameter.
  4. Send each value to the number array every iteration.
  5. Make sure the value is a number. If not, send a message.
  6. Make sure the value is an integer. If not, send a message.
  7. Make sure the value is a positive number. If not, send a message.

*/

for (const solution of [
  // secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter is 0 -> [0]', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [0, 1]', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    it('string -> "Enter a number"', () => {
      expect(solution('asdf')).toEqual('Enter a number');
    });
    it('-4 -> "Enter a positive number"', () => {
      expect(solution(-4)).toEqual('Enter a positive number');
    });
    it('1.5 -> "Enter an integer"', () => {
      expect(solution(1.5)).toEqual('Enter an integer');
    });
    it('1000000 -> "Enter a number smaller than 1000000"', () => {
      expect(solution(1000000)).toEqual('Enter a number smaller than 1000000');
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
