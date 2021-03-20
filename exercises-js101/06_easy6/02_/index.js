/*
Double Char (Part 2)


Write a function that takes a string, doubles every consonant
character in the string, and returns the result as a new string.
The function should not double vowels ('a','e','i','o','u'),
digits, punctuation, or whitespace.
*/

function repeater(word) {
  let characters = word.split("");

  let resultArray = characters.reduce((accum, char) => {
    accum.push(repeatCount(char, 2));
    return accum
  }, []);

  return resultArray.join("");
}

function repeatCount(char, count) {
  return char.repeat(count);
}

//check if its a character a, b, c, d,... not num or punctuation ascii code
function isConsonant(character) {

  if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
    return !['a','e','i','o','u'].includes(character);
  }

}


function doubleConsonants(phrase) {
  if (phrase === '') return '';
  let characters = Array.from(phrase);
  let repeatedPhrase = "";
  for (let i = 0; i < characters.length; i += 1) {
    if (isConsonant(characters[i].toUpperCase() )) {
      repeatedPhrase += repeatCount(characters[i], 2)
    } else {
      repeatedPhrase += characters[i];
    }
  }

  return repeatedPhrase
}


// String.charCodeAt()
console.log(doubleConsonants('String'));        // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // "")