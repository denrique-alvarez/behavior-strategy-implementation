// #todo

'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake:
  the fix(es):
*/

console.log('- broken JS -');
try {
  // comment the error and mistake in this code

  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(err.message === 'null is not a function', 'message fail');
}

console.log('- throw new error -');
try {
  console.assert(false, 'it should throw');
} catch (err) {
  console.assert(err.name === 'TypeError', 'name fail');
  console.assert(err.message === 'null is not a function', 'message fail');
}
