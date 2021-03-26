/*
Staggered Caps (Part 1)

Write a function that takes a string as an argument,
and returns that string with a staggered capitalization scheme.

Every other character, starting from the first, should be
capitalized and should be followed by a lowercase or non-alphabetic character.

Non-alphabetic characters should not be changed, but should
be counted as characters for determining when to switch
between upper and lower case.
*/

/**
 * @param {string} string
 * @return {string}
 */
 function staggeredCase(string) {
  // create result empty array
  let result = [];
  // convert string into lowercase
  let baseString = string.toLowerCase()

  // convert string into an array of individual characters
  let characters = baseString.split('')
  // console.log(characters)
  // iterate over every character
  for (let idx = 0; idx < characters.length; idx += 1) {
    // if the index of current iteration is even
    let character = characters[idx]
    // console.log(character)
    if (idx % 2 === 0) {
        // convert to upper
        character = character.toUpperCase()
    } else {
        // convert to lower
        character = character.toLowerCase()
    }
    // push current character into result variable
    result.push(character)
  }
  // return return string
  return result.join('')
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
