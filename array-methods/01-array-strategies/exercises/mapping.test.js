// #todo

'use strict';

/**
 * casts each item in an array to Number
 * returns a new array without modifying the original
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
const mapToNumber = (arr = []) => {
  const numberValues = [];
  for (const value of arr) {
    numberValues.push(Number(value));
  }

  return numberValues;
};

describe('mapToNumber casts each element in an array to type "number"', () => {
  describe('it correctly converts the values in an array', () => {
    it('returns an empty array if an empty array is passed', () => {
      const expected = [];
      const actual = mapToNumber([]);
      expect(actual).toEqual(expected);
    });
    it('converts strings to Number', () => {
      const expected = [1, 0, 20, NaN, Infinity];
      const actual = mapToNumber(['1', '', '20', 'asdf', 'Infinity']);
      expect(actual).toEqual(expected);
    });
    it('converts booleans to Number', () => {
      const expected = [1, 0];
      const actual = mapToNumber([true, false]);
      expect(actual).toEqual(expected);
    });
    it('converts null and undefined to Number', () => {
      const expected = [0, NaN];
      const actual = mapToNumber([null, undefined]);
      expect(actual).toEqual(expected);
    });
    it('converts numbers to Number', () => {
      const expected = [14, -14, 0, NaN, Infinity];
      const actual = mapToNumber([14, -14, 0, NaN, Infinity]);
      expect(actual).toEqual(expected);
    });
    it('converts mixed type arrays to Number', () => {
      const expected = [NaN, 1, 1, 0, NaN];
      const actual = mapToNumber(['a', 1, true, null, undefined]);
      expect(actual).toEqual(expected);
    });
  });
  describe('it uses the argument array correctly', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = mapToNumber([]);
      const areNotTheSameArray = arg !== returned;
      expect(areNotTheSameArray).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = ['a', 1, true, null, undefined];
      mapToNumber(arg);
      expect(arg).toEqual(['a', 1, true, null, undefined]);
    });
  });
});
