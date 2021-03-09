/*
Write a function that determines and returns the ASCII
string value of a string passed in as an argument.

The ASCII string value is the sum of the ASCII values
of every character in the string.

(You may use String.prototype.charCodeAt() to determine
the ASCII value of a character.)
*/

function asciiValue (string) {
  return getCharacters(string).map((char, index) => getCharacterValue(char))
                              .reduce((total, value) => total + value, 0)
}



/**
 * @param {string} string
 * @return {number[]}
 * @example 'School' -> [76, 97, 117, 110, 99, 104]
 */
function getCharacterValues(string) {
  let values = []
  for (let i = 0; i < string.length; i++) {
    let value = string.charCodeAt(i)
    values.push(value)
  }
  return values
}

/**
 * @param {number} number
 * @return {number} total
 */
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

/**
 * Get the total sum of a string's ascii value
 * @param {string} string
 * @return {number} totalSum
 */
function asciiValue(string) {
  // Convert each letter in the string into a
  // number representing it's ascii value
  let characterValues = getCharacterValues(string)

  // Sum up each value in the array of numbers
  let totalSum = sum(...characterValues)

  // return the total sum
  return totalSum
}



console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0