/*
Reverse It (Part 2)


Write a function that takes a string argument containing
one or more words, and returns a new string containing the
words from the string argument.

All five-or-more letter words should have their letters in
reverse order.

The string argument will consist of only
letters and spaces.

Words will be separated by a single space.
*/


/**
 * @example
 * @param {string} string
 *
 *
 * Step1: split the string into array ["walk", "around"...]
 * Step2: loop through strings in array and check the length
 * Step3: if length of string >= 5 reverse
 * step4: join the array into a string
 *
 *
 *
 */

 function reverseWords(string) {
  let splitString = string.split(" ")

  let resultString = splitString.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('')
    }
    return word
  })
  return resultString.join(' ')
}



console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"



// LS solution
function reverseWords(string) {
  let words = string.split(' ');
  let reversedWords = [];

  for (let idx = 0; idx < words.length; idx += 1) {
    let currentWord = words[idx];
    if (currentWord.length >= 5) {
      reversedWords.push(reverseWord(currentWord));
    } else {
      reversedWords.push(currentWord);
    }
  }

  return reversedWords.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}