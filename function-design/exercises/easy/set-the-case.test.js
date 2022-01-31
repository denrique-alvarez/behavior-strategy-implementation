// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */
const stub = (text = '', lowerCase = true) => {
  return lowerCase === true ? text.toLowerCase() : text.toUpperCase();
};

/*
  1. Create a condition to modify the string.
  2. Return the string depending on the result of that condition.
*/

for (const solution of [
  // secretSolution,
  stub
]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('"" --> ""', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      it('"ASDF" --> "asdf"', () => {
        expect(solution('ASDF', true)).toEqual('asdf');
      });
      // when the text is all lower case
      it('"asdf" --> "asdf"', () => {
        expect(solution('asdf', true)).toEqual('asdf');
      });
      // when the text is mixed upper and lower case
      it('"aSdF" --> "asdf"', () => {
        expect(solution('aSdF', true)).toEqual('asdf');
      });
      // when the text contains punctuation
      it('"as.df" --> "as.df"', () => {
        expect(solution('as.df', true)).toEqual('as.df');
      });
      // when the text contains numbers
      it('"as123df" --> "as123df"', () => {
        expect(solution('as123df', true)).toEqual('as123df');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('"" --> ""', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('"ASDF" --> "ASDF"', () => {
        expect(solution('ASDF', false)).toEqual('ASDF');
      });
      // when the text is all lower case
      it('"asdf" --> "ASDF"', () => {
        expect(solution('asdf', false)).toEqual('ASDF');
      });
      // when the text is mixed upper and lower case
      it('"asDf" --> "ASDF"', () => {
        expect(solution('asDf', false)).toEqual('ASDF');
      });
      // when the text contains punctuation
      it('"AS.DF" --> "AS.DF"', () => {
        expect(solution('AS.DF', false)).toEqual('AS.DF');
      });
      // when the text contains numbers
      it('"as123df" --> "AS123DF"', () => {
        expect(solution('as123df', false)).toEqual('AS123DF');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
