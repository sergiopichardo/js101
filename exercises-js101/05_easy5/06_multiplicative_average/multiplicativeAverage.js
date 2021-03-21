/*
author: Sergio Pichardo
section: Easy 5, No 6
title: Multiplicative Average
*/

/**
 * Calculate multiplicative average
 * @param {number} integers
 * @return {string} average
 */
function multiplicativeAverage(integers) {
  let integersCount = integers.length;
  let product = integers.reduce((acc, el, _) => acc *= el, 1)
  let average = product / integersCount
  let formattedAverage = average.toFixed(3)
  return formattedAverage
}

console.log(multiplicativeAverage([3, 5]));
// "7.500"

console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
// "28361.667"