/*
Swap Case

Write a function that takes a string as an argument, and
returns that string with every lowercase letter changed
to uppercase and every uppercase letter changed to lowercase.
Leave all other characters unchanged.
*/

/**
 * @param {string} string
 * @param {string} - string with swapped cases
 */
 function swapCase(string) {
  // create a result array
  let result = [];
  // split the input string into a string of individual characters
  let individualChars = string.split('')

  // iterate through characters array
  for (let character of individualChars) {
    if (isLetter(character)) {
      // - if current character is letter and is uppercase
      if (character === character.toUpperCase()){
        character = character.toLowerCase();
      } else {
        character = character.toUpperCase()
      }
    }
    result.push(character)
  }
  return result.join('');
}

function isLetter(character) {
  return (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) ||  // uppercase
         (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)    // lowercase
}

function isUpperCase(string) {
  return string.toUpperCase() === string
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

