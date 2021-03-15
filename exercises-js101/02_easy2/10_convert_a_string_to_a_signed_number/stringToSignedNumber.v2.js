function stringToInteger(numericString) {
  let reversedNumericString = [...numericString].reverse();
  let result = 0;

  for (let idx = 0; idx < reversedNumericString.length; idx += 1) {
    result += (+reversedNumericString[idx]) * Math.pow(10, idx);
  }
  return result;
}


function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}