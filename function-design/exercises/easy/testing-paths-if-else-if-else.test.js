// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */
const stub = (val1, val2) => {
  if (val1 === val2) return 'strictly equal';
  if (typeof val1 === typeof val2) return 'same type';
  else return 'totally different';
};

/*
  1. Set two parameters without assigning default value.
  2. Create conditional statement to compare strictly. Return correspondant message.
  3. Create conditional statement to compare values. Return correspondant message.
  4. Set default message if any of the conditions are not met.

*/

for (const solution of [
  secretSolution,
  // stub,
]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello', 'hello')).toEqual('strictly equal');
      });
      it('two identical numbers -> "strictly equal"', () => {
        // 1, 1.0
        expect(solution(1, 1)).toEqual('strictly equal');
      });
      it('two identical booleans -> "strictly equal"', () => {
        expect(solution(true, true)).toEqual('strictly equal');
      });
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(solution('hello', 'bye')).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(1, 4)).toEqual('same type');
      });
      it('two different booleans -> "same type"', () => {
        expect(solution(true, false)).toEqual('same type')
      });
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, 4)).toEqual('totally different');
      });
      it('values that can be confusing', () => {
        // "4" and 4
        expect(solution('4', 4)).toEqual('totally different')
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
