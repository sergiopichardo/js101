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

  const middleIndex = computeMiddleIndex(collection)
  const firstHalf = collection.slice(0, middleIndex)
  const secondHalf = collection.slice(middleIndex)

  return [firstHalf, secondHalf]
}


/**
 * Computes the middle of a collection
 * of elements based on collection length.
 * @param {Array.<*>} collection
 * @return {number} middleIndex
 */
function computeMiddleIndex(collection) {
  let isOdd = collection.length % 2 !== 0
  let middleIndex;

  if (isOdd) {
    middleIndex = Math.floor(collection.length / 2) + 1
  } else {
    middleIndex = collection.length / 2
  }

  return middleIndex
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]