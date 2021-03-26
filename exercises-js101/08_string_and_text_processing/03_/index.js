
/*
Letter Counter

Write a function that takes a string and returns
an object containing three properties: one representing
the number of characters in the string that are lowercase
letters, one representing the number of characters
that are uppercase letters, and one representing the
number of characters that are neither.
*/


/**
 * @param {string} string
 * @return {{ lowercase: number, uppercase: number, neither: number }}
 */
 function letterCaseCount(string) {
  let characters = Array.from(string)
  let resultObject = { lowercase: 0, uppercase: 0, neither: 0 }

  for (let idx = 0; idx < characters.length; idx++) {
    let character = characters[idx]

    if (isLetter(character) && isUpperCase(character)) {
      resultObject['uppercase'] += 1
    } else if (isLetter(character) && !isUpperCase(character)) {
      resultObject['lowercase'] += 1
    } else {
      resultObject['neither'] += 1
    }
  }

  return resultObject
}

function isLetter(character) {
  return (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) ||  // uppercase
         (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)    // lowercase
}

function isUpperCase(string) {
  return string.toUpperCase() === string
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }