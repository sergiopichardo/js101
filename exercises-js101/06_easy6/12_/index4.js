function isBalanced(str) {
  let arr = str.split('');
  let compArr = [];
  arr.forEach(char => {
    if (char === '(' || char === ')') {
      compArr.push([char]);
    }
  });

  let pairArr = [];
  let startIndex;
  let endIndex;
  for (startIndex = 0; startIndex < arr.length - 1; startIndex++) {
    if (arr[startIndex] === '(') {
      for (endIndex = startIndex + 1; endIndex < arr.length; endIndex++) {
        if (arr[endIndex] === ')') {
          pairArr.push(arr[startIndex], arr[endIndex]);
          break;
        }
      }
    }
  }

  return compArr.length === pairArr.length;
}