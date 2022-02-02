// #todo

'use strict';

/**
 *  returns an array with length "max"
 *    each index that's divisible by 3 and 5 stores "fizzbuzz"
 *    each index that's divisible by only 3 stores "fizz"
 *    each index that's divisible by only 5 stores "buzz"
 *    all other indexes store the same number as that index
 *  @param {number} [max=0] - how many numbers to check
 *    max must be an integer greater than or equal to 0
 *  @returns {(number|string)[]} an array of length max
 */
const stub = (max = 0) => {
  const newArr = [];
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      newArr.push('fizz');
    } else if (i % 5 === 0) {
      newArr.push('buzz')
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};

/*  describe this solution's strategy
 1. Count from 0 to the required value one by one.
 2. Check everytime if the number is divisible by 3, 5, both of neither one.
 3. If the number meets one of the first three conditions, return text accordingly.
 4. If the number does not meet any of the conditions, return the same number.
 5. The final return value should have as many elements as the value of the count.
 */

const whileLoop = (max) => {
  let countUp = 0;
  const result = [];
  while (max > countUp) {
    const nextEntry = countUp % 15 === 0 ? 'fizzbuzz' : countUp % 5 === 0 ? 'buzz' : countUp % 3 === 0 ? 'fizz' : countUp;
    result.push(nextEntry);
    countUp++;
  }
  return result;
};

/* describe this solution's strategy
 */
const oneLineforLoop = (max) => {
  const result = [];
  for (let i = -1; i < max - 1; i)
    result.push((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
  return result;

  // https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
};

/* describe this solution's strategy
 */
const manySmallFunctions = (max) => {
  const threeDivides = (n) => n % 3 === 0;
  const fiveDivides = (n) => n % 5 === 0;
  const fifteenDivides = (n) => n % 15 === 0;

  const fizzbuzzOrNumber = (num) => {
    if (fifteenDivides(num)) {
      return 'fizzbuzz';
    } else if (threeDivides(num)) {
      return 'fizz';
    } else if (fiveDivides(num)) {
      return 'buzz';
    } else {
      return num;
    }
  };

  // https://stackoverflow.com/a/33352604
  const arrayOfIndexes = [...Array(max).keys()];
  const fizzBuzzedArray = arrayOfIndexes.map(fizzbuzzOrNumber);
  return fizzBuzzedArray;
};

/*

*/

for (const solution of [
  // secretSolution,
  // stub,
  // whileLoop,
  // oneLineforLoop,
  manySmallFunctions,
]) {
  describe(solution.name + ': fizzbuzz', () => {
    describe('numbers divisible by 3', () => {
      it('3 should return an array with the first 3 values', () => {
        expect(solution(3)).toEqual(['fizzbuzz', 1, 2]);
      });
      // write more of these
    });
    describe('numbers divisible by neither 3 nor 5', () => {
      it('4 should return an array with the first 4 values', () => {
        expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
      });
      // write more of these
    });
    describe('numbers divisible by 5', () => {
      it('5 should return an array with the first 5 values', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      // write more of these
    });
    describe('numbers divisible by 3 and 5', () => {
      it('15 should return an array with the first 15 values', () => {
        expect(solution(15)).toEqual([
          'fizzbuzz',
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
        ]);
      });
      // write more of these
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if ("number" != typeof a) { throw new TypeError("max is not a number"); } if (0 > a) { throw new RangeError("max is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("max is not an integer"); } const b = []; for (let c = 0; c < a; c++) { 0 == c % 3 && 0 == c % 5 ? b.push("fizzbuzz") : 0 == c % 3 ? b.push("fizz") : 0 == c % 5 ? b.push("buzz") : b.push(c); } return b; }
