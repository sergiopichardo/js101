/*
Delete Vowels

Write a function that takes an array of strings, and
returns an array of the same values with all vowels
(a, e, i, o, u) removed.
*/

/**
 * @param {string[]} stringCollection - array of string
 * @return {string} - array of strings without vowels
 */
 function removeVowels(stringCollection) {

  let nestedCollection = stringCollection.map((item) => {
    return Array.from(item) // [[], [], []]
  })

  let resultArray = []
  for (let idx = 0; idx < nestedCollection.length; idx += 1) {
     let word = []
     for (let jdx = 0; jdx < nestedCollection[idx].length; jdx += 1) {
       let letter = nestedCollection[idx][jdx];
       if (!isVowel(letter)) {
         word.push(letter)
       }
     }
     resultArray.push(word.join(''))
  }

  return resultArray;
 }



 /**
  *
  */
 function isVowel(character) {
   return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(character)
 }

 console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
 console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
 console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]