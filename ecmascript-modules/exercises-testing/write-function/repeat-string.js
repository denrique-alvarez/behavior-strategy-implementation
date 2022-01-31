// #todo

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions must be greater than zero, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
export const repeatString = (text = '', repeat = 1) => {
  let repeatedString = '';
  for (let i = repeat; 0 < i; i--) {
    repeatedString = repeatedString + text;
  }
  return repeatedString;
};
