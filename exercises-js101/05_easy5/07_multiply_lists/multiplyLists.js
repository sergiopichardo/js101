/**
 * Calculate the numbers in ListA
 * and ListB and the same index.
 * @param {number[]} numListA
 * @param {number[]} numListB
 * @return {number[]}
 */
function multiplyList(numListA, numListB) {
  let resultList = []
  for (let idx = 0; idx < numListA.length; idx += 1) {
    let product = numListA[idx] * numListB[idx]
    resultList.push(product)
  }
  return resultList
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
// [27, 50, 77]