/*
Log all even numbers from 1 to 99, inclusive,
to the console, with each number on a separate line.
*/

/**
 * @param {number} number
 * @return {boolean}
 */
function isEven(number) {
  return number % 2 === 0;
}

// iterate from `min` up to and including `max`
for (let number = 1; number < 100; number += 1) {
  // if the number is even
  if (isEven(number)) {
    // log the number to the console
    console.log(number)
  }
}

