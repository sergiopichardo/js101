/*
Get The Middle Character
Write a function that takes a non-empty string argument,
and returns the middle character(s) of the string.
If the string has an odd length, you should return exactly one character.
If the string has an even length, you should return exactly two characters.
*/


function centerOf(string) {
  if (string.length === 1) return string;

  let index = findMiddleIndex(string)
  let middleCharacter = string[index];

  if (string.length % 2 === 0) {
    middleCharacter += string[index + 1]
  }
  return middleCharacter;
}

// findMiddle
// input: An array of characters
// output: index
function findMiddleIndex(string) {
  let index = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return index - 1;
  }
  return index
}

//
// [ a, (b, c), d]
// [ a, b, (c), d, e]

//                                       *    *
// [ 'I', ' ', 'L', 'o', 'v', 'e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ] // 17

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"