/*
Using the multiply() function from the "Multiplying Two Numbers"
problem, write a function that computes the square of its
argument (the square is the result of multiplying a number by itself).
*/

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

// console.log(square(5) === 25); //  true
// console.log(square(-8) === 64); // true



// function power(base, exponent) {
//   // declare result variable
//   let total = 1
//   // iterate from 1 to exponent
//   for (let i = 0; i < exponent; i++) {
//     // call the multiply function and pass the base
//     total *= multiply(total, base)
//   }
//   // return the result variable
//   return total
// }

// console.log(power(3, 2));



