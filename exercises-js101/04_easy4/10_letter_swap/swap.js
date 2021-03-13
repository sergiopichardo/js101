/*
Letter Swap

Given a string of words separated by spaces, write a
function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter,
and that the string will always contain at least one word.
You may also assume that each string contains nothing but
words and spaces, and that there are no leading, trailing,
or repeated spaces.
*/



/**
 * @param {string} words
 * @return {string}
 */
 function swap(words) {
  // split into array of strings my empty space and assign to variable
  let arrayOfStrings = words.split(" ");


  // iterate word by word
  const swappedWords = arrayOfStrings.map((word) => {
    // swap the first and last character and store in variable
    if (word.length === 1) return word;


    return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  });

  // return new array
  return swappedWords.join(" ");
}

// Abcde --> ebcdA

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

