// #todo

'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */
const stub = (a = false, b = false) => {
  if (typeof a !== 'boolean' && typeof b !== 'boolean') return 'Enter a boolean';
  let c = String(Number(a));
  let d = String(Number(b));
  return c + d;
};

/*
  1. Set the two parameters with default value 'false'.
  2. Create a new variable where the boolean value of the first parameter can be converted into a number and then into a string. Keep in mind operation precedence.
  3. Create a new variable where the boolean value of the second parameter can be converted into a number and then into a string. Keep in mind operation precedence.
  4. Return the final result as a concatenated string.
*/

for (const solution of [
  // secretSolution,
  stub,
]) {
  // this function only 4 possible combinations of arguments
  //  it's possible test them all and have 100% confidence in the function
  describe(solution.name + ': converts two booleans to binary', () => {
    it('true, true --> "11"', () => {
      const actual = solution(true, true);
      expect(actual).toEqual('11');
    });
    it('true, false --> "10"', () => {
      const actual = solution(true, false);
      expect(actual).toEqual('10');
    });
    it('false, true --> "01"', () => {
      const actual = solution(false, true);
      expect(actual).toEqual('01');
    });
    it('false, false --> "00"', () => {
      const actual = solution(false, false);
      expect(actual).toEqual('00');
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
