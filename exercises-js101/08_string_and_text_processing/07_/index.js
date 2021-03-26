/*
Staggered Caps (Part 2)

Modify the function from the previous exercise so it
ignores non-alphabetic characters when determining
whether it should uppercase or lowercase each letter.

The non-alphabetic characters should still be included
in the return value; they just don't count when toggling
the desired case.
*/




/**
 * @param {string} string
 * @return {string}
 */
 function staggeredCase(string) {
  let result = []; // I
  let baseString = string.toLowerCase()
  let characters = baseString.split('')

  let needUpper = true

  // "I Love Launch School!" --> "I lOvE lAuNcH sChOoL!"
  for (let idx = 0; idx < characters.length; idx += 1) {
    let character = characters[idx]

    if (isAlphabetic(character)) {
      if (needUpper) {
        needUpper = false
        character = character.toUpperCase()
      } else {
        needUpper = true
        character = character.toLowerCase()
      }
    }

    result.push(character)

  }
  console.log(result.join(''))
  return result.join('')
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");


function isAlphabetic(character) {
  return ((character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) ||
          (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122));
}