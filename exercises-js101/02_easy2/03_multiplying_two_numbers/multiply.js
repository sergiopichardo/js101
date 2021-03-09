/*
Create a function that takes two arguments,
multiplies them together, and returns the result.
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


console.log(multiply(2, 3)) // 6
console.log(multiply(2, 3, 5)) // 30
console.log(multiply(2, 3, 5, 2)) // 60
console.log(multiply(2, 0, 5)) // 0
console.log(multiply(2)) // 2