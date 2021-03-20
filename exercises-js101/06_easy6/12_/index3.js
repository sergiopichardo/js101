function isBalanced(string) {
  let leftBrackets = 0;
  let rightBrackets = 0;
  let balanced = true;

  for (let char of string) {
    if (char === '(') {
      leftBrackets++;
    } else if (char === ')') {
      rightBrackets++;
    }
    if (rightBrackets > leftBrackets) {
      balanced = false;
    }
  }
  if (leftBrackets !== rightBrackets) {
    balanced = false;
  }
  return balanced;
}