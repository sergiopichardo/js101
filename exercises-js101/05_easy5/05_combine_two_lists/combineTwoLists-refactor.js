/*
Title: Combine Two Lists (Refactor)
Section: Easy 5, No. 5
Date: March 21, 2021

Author: Sergio Pichardo
*/

/**
 * Combine two arrays, and return a
 * new array alternating the values
 * from each input array
 * @param {Array.<*>} listA - an array with values (same size)
 * @param {Array.<*>} listB - an array with values (same size)
 * @return {Array.<*>} - array with alternating values
 */
 function interleave(listA, listB) {
  return listA.reduce((accum, _, idx) => {
      return accum.concat(listA[idx], listB[idx]);
  }, [])
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
// [1, "a", 2, "b", 3, "c"]