/*
Write a function that takes a string, doubles every
character in the string, and returns the result as
a new string.
*/

/**
 * Returns a string with characters doubled
 * @param {string} word
 * @return {string}
 */
 function repeater(word) {
  let characters = word.split("");
  // let resultArray = []
  // for (let i = 0; i < characters.length; i++) {
  //   let repeatedChar = repeatCount(characters[i], 2)
  //   resultArray.push(repeatedChar);
  // }
  for (let i = 0; i < characters.length; i += 1) {

  }

  let resultArray = characters.reduce((accum, char) => {
    accum.push(repeatCount(char, 2));
    return accum
  }, []);

  return resultArray.join("");
}

function repeatCount(char, count) {
  return char.repeat(count);
}



console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""