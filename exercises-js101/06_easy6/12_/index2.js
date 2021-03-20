function isBalanced(string) {
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (rightCount > leftCount) {
      return false;
    } else if (string[i] === '(') {
      leftCount += 1;
    } else if (string[i] === ')') {
      rightCount += 1;
    }
  }

  return rightCount === leftCount ? true : false;
}