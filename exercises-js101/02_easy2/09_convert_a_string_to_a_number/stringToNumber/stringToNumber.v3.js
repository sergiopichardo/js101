/**
 * Converts a numeric string into an integer
 * @param {string} numericString
 * @return {number}
 */
function stringToInteger(numericString) {
  let reversedNumericString = [...numericString].split('').reverse();
  let result = 0;

  for (let idx = 0; idx < reversedNumericString.length; idx += 1) {
    result += (+reversedNumericString[idx]) * Math.pow(10, idx);
  }
  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true




/*
"4321" --> split --> ["4", "3", "2", "1"]
["4", "3", "2", "1"] --> reverse --> ["1", "2", "3", "4"]

Iteration 1
------------
result = 0
result += 1 * Math.pow(10, 0)
result += 1 * (10 ^ 0)
result += 1 * (1)
result += 1
0      +  1 = 1

Iteration 2
------------
result += 2 * Math.pow(10, 1)
result += 2 * (10 ^ 1)
result += 2 * (10)
result += 20
1      +  20 = 21

Iteration 3
------------
result += 3 * Math.pow(10, 2)
result += 3 * (10 ^ 2)
result += 3 * (100)
result += 300
21     +  300 = 321

Iteration 4
------------
result += 4 * Math.pow(10, 3)
result += 4 * (10 ^ 3)
result += 4 * (1000)
result += 4000
321    + 4000 = 4321
*/
