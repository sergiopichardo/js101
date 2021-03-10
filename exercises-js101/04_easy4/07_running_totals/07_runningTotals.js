/*
Running Totals
---
Write a function that takes an array of numbers, and returns an array
with the same number of elements, with each element's value being
the running total from the original array.
*/


/**
 * @param {number[]} numbers
 * @return {number[]}
 * @example [1, 2, 3] --> [1, 3, 6]
 */
// function runningTotal(numbers) {
//   let total = 0
//   let newArray = []
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//     newArray.push(total);
//   }
//   return newArray;
// }

const runningTotal = numbers => {
  let total = 0
  return numbers.map(num => total += num);
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


// Launch Code solution
// function runningTotal(array) {
//   let resultArray = [];
//   let sum = 0;

//   for (let idx = 0; idx < array.length; idx += 1) {
//     resultArray.push((sum += array[idx]));
//   }

//   return resultArray;
// };