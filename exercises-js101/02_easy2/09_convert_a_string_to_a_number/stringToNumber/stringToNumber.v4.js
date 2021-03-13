/**
 * Converts a numeric string into an integer
 * @param {string} numericString
 * @return {number}
 */
 function stringToInteger(numString) {
  return [...numString]
          .reverse()
          .map(character => +character)
          .reduce((acc, number, idx) => acc += number * Math.pow(10, idx), 0)
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true




