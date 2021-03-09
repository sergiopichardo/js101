/*
Using the multiply() function from the "Multiplying Two Numbers"
problem, write a function that computes the square of its
argument (the square is the result of multiplying a number by itself).

Further Exploration
---
What if we wanted generalize this function to a "power to the n"
type function: cubed, to the 4th power, to the 5th, etc.
How would we go about doing so while still using the multiply() function?

*/

const { assertEqual } = require('../../../utils/assertion-library/assert')

/**
 * @param {...number} numbers
 * @return {number}
 */
function multiply(...numbers) {
  return numbers.reduce((total, number) => {
    return total * number
  }, 1);
};


/**
 * @param {number} number
 * @return {number}
 * @example 4 -> 16
 */
function square(number) {
  return multiply(number, number)
}

// Square Functions Tests
// assertEqual(square(5), 25, "Should return 25 given 5")
// assertEqual(square(-8), 64, "Should return 64 given -8")


/**
 * CONTINUE HERE
 *  TODOS:
 *    - How to deal with exponent 1
 *    - How to deal with exponent 0
 *    - How to deal with negative exponents
 *    - Add a detailed analysis and mental model
 *    - follow PEDAC system
 */

/**
 * Exponentiation
 * The exponent of a number says how many times to use the number
 * in a multiplication.
 *
 * Examples:
 * 8^0 Any number raised to the power of 0 is 1, including 0
 * 8^0 = 1
 * 0^0 = 1
 * 8^1 Any number raised to the power of 1 is equal to the same number, except 0
 * 8^1 = 8
 * 0^1 = 0
 * 8^2 says to use 8 twice in a multiplication (8 squared)
 * 5^3 says to use 5 three times in a multiplication (5 cubed)
 * 2^4 says to use 2 four times in a multiplication (2 to the fourth power)
 * 2^5 says to use 2 five times in a multiplication (2 to the fifth power)
 * 2^-2 says to use 2 five times in a multiplication (2 to the fifth power)
 */

/**
 * Returns the product of a number raised to the nth power
 * Accounts for negative numbers
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
function power(base, exponent) {
  if (exponent === 0) {
    return 1
  } else if (exponent === 1) {
    return base
  } else if (exponent === -1) {
    return 1/base
  }

  let result = 1
  for (let i = 0; i < exponent; i++) {
    result = multiply(base, result)
  }

  if (exponent > 1) {
    return result
  } else if (exponent < -1) {
    return 1/result
  }
}

// Test cases
assertEqual(power(8, 0), 1, "Should return 1 when 8 is raised to the power of 0.")
assertEqual(power(0, 0), 1, "Should return 1 when 0 is raised to the power of 0")
assertEqual(power(8, 1), 8, "Should return 8 when 8 is raised to the power of 1.")
assertEqual(power(0, 1), 0, "Should return 0 when 1 is raised to the power of 1.")

assertEqual(power(8, 2), 64, "Should return 64 when 8 is raised to the power of 2.")
assertEqual(power(5, 3), 125, "Should return 125 when 5 is raised to the power of 3.")
assertEqual(power(2, 4), 16, "Should return 32 when 2 is raised to the power of 5.")
assertEqual(power(5, 3), 125, "Should return 125 when 5 is raised to the power of 3.")
assertEqual(power(2, 5), 32, "Should return 32 when 2 is raised to the power of 5.")
assertEqual(power(2, 1), 2, "Should return 2 when 2 is raised to the power of 1.")
assertEqual(power(2, -1), 0.5, "Should return 0.5 when 2 is raised to the power of -1.")





