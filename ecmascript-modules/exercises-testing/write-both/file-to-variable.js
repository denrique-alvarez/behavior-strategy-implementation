// #todo

/**
 * Converts a kebab-case file name from to camel-case variable name.
 *
 * @param {string} fileName - A kebab-case file name.
 * @returns {string} The file name converted to a camel case variable name.
 *
 * @example
 * fileToVariable('file-to-variable.js');
 * // -> 'fileToVariable'
 *
 * @example
 * fileToVariable('do-magic.js');
 * // -> 'doMagic'
 */


/*
Strategy

1. Divide the name of the file into its characters.
2. Look for the '-' character.
3. Set the character right after the '-' to upper case and delete '-'.
5. Put together the characters into one single string.
6. Return new file name.

*/


export const fileToVariable = (fileName = '') => { // Empty string as the default value
  if (typeof fileName !== 'string') return 'Introduce a string'; // In case any other type different from a string is passed return this message
  let camelCase = []; // The variable to store the new string, which initially would be an array
  let kebabCase = fileName.split(''); // The array based on the original string
  
  for (let i = 0; i < kebabCase.length; i++) { 
  	let char = kebabCase[i];
    if (char === '-') { // Loos for '-'.
      let toUpperCase = kebabCase[i+1].toUpperCase(); // Finds the character after '-' and makes it upper case.
      camelCase.push(toUpperCase); // Sends the modified character to the new array.
      i = i + 1; // This line is important so you don't repeat the character that was modified to upper case. Without this line such character would be affected twice by the iteration.
    } else {
    	camelCase.push(char); // Sends the characters different from '-' to the new array. Could add .toLowerCase() to make it all lowerCase.
    }
  }
  return camelCase.join(''); // Returns the new array and turns it into a string.
};






