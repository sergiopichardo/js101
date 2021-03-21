/*
Author: Sergio Pichardo
course: JS101
*/

/**
 * Returns a collection of elements
 * divided into separate arrays.
 * @param {Array.<*>} collection
 */
 function halvsies(collection) {
  if (collection.length === 0) return [[], []]

  const middleIndex = Math.ceil(collection.length / 2)
  const firstHalf = collection.slice(0, middleIndex)
  const secondHalf = collection.slice(middleIndex)

  return [firstHalf, secondHalf]
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]