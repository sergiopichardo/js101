/*
Write a function that takes a string consisting of zero or more space
separated words, and returns an object that shows the number of words
of different sizes.

Words consist of any sequence of non-space characters.
*/


/**
 * @param {string} string
 * @return {Object}
 */
function wordSizes(string) {
  if (string === '') return {}

  let wordSizeMap = {}
  let wordsList = string.split(" ")

  for (let word of wordsList) {
    wordSizeMap[word.length] = ++wordSizeMap[word.length] || 1
  }

  return wordSizeMap
}


console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));
// { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));
// {}


// When removing punctuation
// const PUNCTUATION = ["?", "!", ";", ":", ".", ",", "-"];
// let stringWithoutPunctuation = string.split(" ").map((word) => {
//   return (isPunctuated(string)) ? string.slice(0, string.length - 1) : string;
// })

