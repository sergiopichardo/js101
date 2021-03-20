// Author: Bob Rodes
/*
ES6's Set object makes this problem fairly simple, since its
constructor automatically strips duplicate values.
You just need to concatenate the two arrays, pass the result
into the Set constructor, and deconstruct the result into an array.
*/

function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3], [3, 2, 4]));