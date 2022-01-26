// #todo

'use strict';

/**
 * Counts how many times a specific character appears in a text.
 *
 * @param {string} [text=''] - The text to search.
 * @param {string} [toCount=''] - The character to count, must have length 1.
 * @returns {number} how many times the character appears in the text
 */
const countCharacter = (text, toCount) => {
  return (text.split(toCount)).length - 1;
};

describe('Checks for characters or groups of characters in string', () => {
  describe('Looks for a single character', () => {
    it('It counts how many times the character "h" appears in the given string', () => {
      const expected = 5;
      const actual = countCharacter('hola hola hola hola hola', 'h');
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Looks for a group of characters', () => {
    it('It looks for the characters "ab" in the given string', () => {
      const expected = 3;
      const actual = countCharacter('ab asdfsdaf ab adsasdf ab', 'ab');
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Looks for a single character', () => {
    it('It looks for a character that is not present', () => {
      const expected = 0;
      const actual = countCharacter('ab asdfsdaf ab adsasdf ab', 'z');
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
