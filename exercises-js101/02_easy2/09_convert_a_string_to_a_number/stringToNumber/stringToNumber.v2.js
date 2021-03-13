const NUMBERS_MAP = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10
}

function stringToInteger(numericString) {

  let reversedNumericString = [...numericString].split('').reverse();
  let result = 0;

  for (let idx = 0; idx < numericString.length; idx += 1) {
    result += NUMBERS_MAP[numericString[idx]] * (10 ** idx);
  }

  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true