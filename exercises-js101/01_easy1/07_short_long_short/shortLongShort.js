/*
Write a function that takes two strings as arguments,
determines the longer of the two strings, and then
returns the result of concatenating the shorter string,
the longer string, and the shorter string once again.

You may assume that the strings are of different lengths.
*/

/**
 * @param {string} stringA
 * @param {string} stringB
 * @return {string}
 */
const shortLongShort = (stringA, stringB) => {
  [stringA, stringB] = [stringA, stringB].sort((a, b) => a.length - b.length);
  return `${stringA}${stringB}${stringA}`;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"