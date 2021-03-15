/*
In the previous exercise, you developed a function that converts
simple numeric strings to integers.
In this exercise, you're going to extend that function to work
with signed numbers.

Write a function that takes a string of digits, and returns the
appropriate number as an integer. The string may have a leading
+ or - sign; if the first character is a +, your function should
return a positive number; if it is a -, your function should
return a negative number.
If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available
in JavaScript, such as parseInt() and Number().
You may, however, use the stringToInteger() function from the
previous lesson.
*/

function stringToSignedInteger(numString) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let numChars = [...numString]
  let sign = 1;

  if (numChars[0] === "-") {
    numChars.shift()
    sign = -1
  } else if (numChars[0] === "+") {
    numChars.shift()
  }

  let numbers = numChars.reverse().map(char => DIGITS[char])

  let result = 0;
  for (let idx = 0; idx < numbers.length; idx += 1) {
    result += numbers[idx] * Math.pow(10, idx);
  }

  return sign * result
}

console.log(stringToSignedInteger("4321"));
console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100"));



// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true