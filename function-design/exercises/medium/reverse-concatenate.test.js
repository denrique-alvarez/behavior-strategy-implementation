// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */
const stub = (arrayOfStrings = []) => {
  let reversedCombined = arrayOfStrings.reverse().join('');
  return reversedCombined;
};

/*

*/

for (const solution of [
  // secretSolution,
  stub
]) {
  describe(solution.name + ': Reverses and concatenates an array of strings', () => {
    describe('Default values', () => {
      it('[] --> ""', () => {
        const expected = '';
        const actual = solution([]);
        expect(actual).toEqual(expected);
      });
      it('No argument passed --> ""', () => {
        const expected = '';
        const actual = solution();
        expect(actual).toEqual(expected);
      });
    });
    describe('Array of strings', () => {
      it('["hola", "chao"] --> "chaohola"', () => {
        const expected = 'chaohola';
        const actual = solution(["hola", "chao"]);
        expect(actual).toEqual(expected);
      });
      it('["hola"] --> "hola"', () => {
        const expected = 'hola';
        const actual = solution(['hola']);
        expect(actual).toEqual(expected);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
