// #todo

'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */
const stub = (value) => {
  return Boolean(value);
};

/*
1. Return the boolean version of the given value.
*/

for (const solution of [
  // secretSolution,
  stub,
]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    describe('solution can identify truthy values', () => {
      it('non-empty strings -> true', () => {
        const actual = solution('asdf');
        expect(actual).toEqual(true);
      });
      it('numbers that are not 0 or NaN -> true', () => {
        const actual = 123;
        expect(solution(actual)).toEqual(true);
      });
      it('true -> true', () => {
        expect(solution(true)).toEqual(true);
      });
    });
    describe('solution can identify falsy values', () => {
      it('"" -> flase', () => {
        const actual = '';
        expect(solution(actual)).toEqual(false);
      });
      it('0 -> false', () => {
        const actual = 0;
        expect(solution(actual)).toEqual(false);
      });
      it('NaN -> false', () => {
        const actual = NaN;
        expect(solution(actual)).toEqual(false);
      });
      it('false -> false', () => {
        const actual = false;
        expect(solution(actual)).toEqual(false);
      });
      it('undefined -> false', () => {
        const actual = undefined;
        expect(solution(actual)).toEqual(false);
      });
      it('null -> false', () => {
        const actual = null;
        expect(solution(actual)).toEqual(false);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
