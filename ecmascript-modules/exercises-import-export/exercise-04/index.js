// #todo

debugger;

// import the values from script.js to pass the assertions

import { months, MODULES_BECAME_STANDARD_YEAR } from './script.js';

const test1 = months[0] === 'Jan';
const test2 = months[8] === 'Dec';
const test3 = months[3] === 'Apr';
const test4 = months[5] === 'Sep';
const test5 = MODULES_BECAME_STANDARD_YEAR === 1472;

console.assert(test1, 'Test 1');
console.assert(test2, 'Test 2');
console.assert(test3, 'Test 3');
console.assert(test4, 'Test 4');
console.assert(test5, 'Test 5');
