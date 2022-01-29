// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */
const stub = (text = '', lowerCase = true) => {
  let reversed = text.split('').reverse().join('');
  return lowerCase === true ? reversed.toLowerCase() : reversed.toUpperCase();
};

/*
  1. Create a parameter and set its value to an empty string.
  2. Create a second parameter to store the boolean that will make the string lower or upper case.
  3. Turn the given string into an array.
  4. Reverse the order of the elements in the array.
  5. Turn the new array into a string and store in a variable named reversed.
  6. Create a condition to set the new string in lower or upper case.
  7. Return the new final string.
*/

for (const solution of [
  // secretSolution,
  stub
]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('"" to lower case', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('ASDF to lower case', () => {
          expect(solution('ASDF', true)).toEqual('fdsa');
        });
        // when the text is all lower case
        it('asdf to lower case', () => {
          expect(solution('asdf', true)).toEqual('fdsa');
        });
        // when the text is mixed upper and lower case
        it('AsDf to lower case', () => {
          expect(solution('asdf', true)).toEqual('fdsa');
        });
        // when the text contains punctuation
        it('as.df to lower case', () => {
          expect(solution('as.df', true)).toEqual('fd.sa');
        });
        // when the text contains numbers
        it('as123df to lower case', () => {
          expect(solution('as123df', true)).toEqual('fd321sa');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it ('"" to upper case', () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it ('"ASDF" to upper case', () => {
          expect(solution('ASDF', false)).toEqual('FDSA');
        });
        // when the text is all lower case
        it ('"asdf" to upper case', () => {
          expect(solution('asdf', false)).toEqual('FDSA');
        });
        // when the text is mixed upper and lower case
        it ('"aSdF" to upper case', () => {
          expect(solution('aSdF', false)).toEqual('FDSA');
        });
        // when the text contains punctuation
        it ('"as.df" to upper case', () => {
          expect(solution('as.df', false)).toEqual('FD.SA');
        });
        // when the text contains numbers
        it ('"as123df" to upper case', () => {
          expect(solution('as123df', false)).toEqual('FD321SA');
        });
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
