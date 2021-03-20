/*
Combining Arrays

Write a function that takes two arrays as arguments,
and returns an array containing the union of the values
from the two.

There should be no duplication of values in the returned
array, even if there are duplicates in the original arrays.

You may assume that both arguments will always be arrays.
*/


/**
 * @param {number|string|null|undefined|boolean} arrayA
 * @param {number|string|null|undefined|boolean} arrayB
 * @param {Array.<number|string|null|undefined|boolean>}
 */
function union(arrayA, arrayB) {
  let flattenedArray = [...arrayA, ...arrayB]
  let unionArray = []

  flattenedArray.forEach((element) => {
    if (!unionArray.includes(element)) {
      unionArray.push(element)
    }
  })

  return unionArray
}

console.log(union([3, 6, 9], [1, 3, 5]));    // [1, 3, 5, 6, 9]
// console.log(union(['a', 'b', 'c'], ['c', 'd', 'a'])) // ['a', 'b', 'c', 'd']
// console.log(union(['a', 8, true], ['a', false, 8]))  // ['a', 8, true, false]
