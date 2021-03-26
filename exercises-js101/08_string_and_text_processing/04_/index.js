/*
Capitalize Words
Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/

function wordCap(string) {
  // split words into array by
  let words = string.split(' '); // [ 'four', 'score', 'and', 'seven' ]

  // result array
  let resultArray = []

  // iterate through array
  for (let idx = 0; idx < words.length; idx += 1) {
    let word = words[idx]
    // 'four' -> 'Four'
    // 'F'
    let firstLetter = word[0].toUpperCase()
    // 'our'
    let restOfWord = word.slice(1)

    let upperCasedWord = firstLetter + restOfWord

    resultArray.push(upperCasedWord)
  }

  // return result array joined by a single space
  return resultArray
}

console.log(wordCap('four'))
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'