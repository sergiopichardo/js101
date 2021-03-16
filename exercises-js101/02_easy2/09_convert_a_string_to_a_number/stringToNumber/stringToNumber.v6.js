/**
 * Converts a string into an array of strings
 * @param {string} digitString
 * @returns {string[]}
 * @example "4321" -> ["4", "3", "2", "1"]
 */
 function getArrayOfCharacters(digitString) {
  return Array.from(digitString)
}

/**
 * Converts an array of strings into an array of numbers
 * @param {string[]} digitStringArray
 * @returns {number[]}
 * @example ["4", "3", "2", "1"] --> [4, 3, 2, 1]
 */
function getArrayOfDigits(digitStringArray) {
  const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  return digitStringArray.map((numString) => DIGITS[numString])
}

/**
 * Gets an array of integers in descending order
 * @param {Array.<number|string>} digitStringArray
 * @returns {number}
 * @example ["4", "3", "2", "1"] -> [1000, 100, 10, 1]
 */
function getArrayOfMultipliers(digitStringArray) {
  let multipliers = []
  let count = 1

  digitStringArray.forEach((_) => {
    multipliers.push(count)
    count *= 10
  })

  return multipliers.reverse();
  // Array.from({ length }, (_, i) => Math.pow(10, i*1)).reverse()
}

/**
 * Convert a numeric string into a positive integer
 * @param {string} string
 * @returns {number}
 * @example "4321" --> 4321
 */
function stringToInteger(string) {
  let arrayOfDigitStrings = getArrayOfCharacters(string)
  let arrayOfDigits = getArrayOfDigits(arrayOfDigitStrings);
  let arrayOfMultipliers = getArrayOfMultipliers(arrayOfDigits)

  let integer = arrayOfDigits.reduce((accum, _, idx) => {
    return accum += arrayOfMultipliers[idx] * arrayOfDigits[idx]
  }, 0)

  return integer
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("302") === 302); // logs true
console.log(stringToInteger("230947") === 230947); // logs true



// function multipliers(length) {
//   Array.from({ length: 4 }, (_, i) => Math.pow(10, i*1)).reverse()
// }