
/*
Array Average

Write a function that takes one argument, an array of integers,
and returns the average of all the integers in the array,
rounded down to the integer component of the average.
The array will never be empty, and the numbers will always be
positive integers.
*/

/**
 * Return the average rounded down
 * to nearest integer.
 * @param {number} integers
 * @return {number}
 */
 function average(integers) {
  let sum = integers.reduce((total, integer) => total + integer);
  let count = integers.length
  return Math.floor(sum / count);
}


console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40