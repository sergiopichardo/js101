/*
Log all odd numbers from 1 to 99, inclusive,
to the console, with each number on a separate line.
*/

/**
 * @param {number} min
 * @param {number} max
 */
function logOddNumbers(min, max) {
  // iterate from `min` up to and including `max`
  for (let number = min; number <= max; number++) {
    // if the number is odd
    if (isOdd(number)) {
      // log the number to the console
      console.log(number);
    }
  }
}

/**
 * @param {number} number
 * @return {boolean}
 */
function isOdd(number) {
  return Math.abs(number % 2 !== 0);
}

logOddNumbers(1, 99);
