/*
Convert a String to a Number
Author: Sergio Pichardo
Date: March 13, 2021
*/

/**
 * Converts a numeric string into an integer
 * @param {string} numericString
 * @return {number}
 */
const stringToInteger = numericString => +(numericString);


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true