/*
Modify the wordSizes function from the previous exercise to exclude
non-letters when determining word size.
For instance, the word size of "it's" is 3, not 4.
*/

const PUNCTUATION = ["?", "!", ";", ":", ".", ",", "-"];

/**
 * @param {string} string
 * @return {Object}
 */
function wordSizes(string) {
  if (string === '') return {};
  string = removePunctuation(string);
  console.log(string);

  let wordSizeMap = {};
  let wordsList = string.split(" ");

  //

  for (let word of wordsList) {
    wordSizeMap[word.length] = ++wordSizeMap[word.length] || 1;
  }

  return wordSizeMap;
}

// When removing punctuation

// let stringWithoutPunctuation = string.split(" ").map((word) => {
//   return (isPunctuated(string)) ? string.slice(0, string.length - 1) : string;
// });
function removePunctuation(str) {
  const regex = /[^a-z\s]/ig
  return str.replace(regex, "");

}



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}