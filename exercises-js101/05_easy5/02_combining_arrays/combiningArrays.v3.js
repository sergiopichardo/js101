// Author: Sam

function union(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3.filter((num, idx) => !arr3.slice(0, idx).includes(num));
}
