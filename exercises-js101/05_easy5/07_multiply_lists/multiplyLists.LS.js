// LS Solution

function multiplyList(numbers1, numbers2) {
  let result = [];

  for (let idx = 0; idx < numbers1.length; idx += 1) {
    result.push(numbers1[idx] * numbers2[idx]);
  }

  return result;
}