/*
How Many?

Write a function that counts the number of occurrences of each
element in a given array. Once counted, log each element alongside
the number of occurrences.

Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

/**
 * Count number of occurences in an array and
 * log each element alongside the number of occurrences
 * @param {string[]} words
 */
function countOccurrences(words) {
  let occurrences = words.reduce((occurrenceMap, word) => {
    word = word.toLowerCase()
    occurrenceMap[word] = (++occurrenceMap[word] || 1);
    return occurrenceMap;
   }, {})

   displayOccurrences(occurrences)
}

/**
 * Display formatted occurrences to the console
 * @param {Object} occurencesCount
 */
function displayOccurrences(occurencesCount) {
  for (let [word, count] of Object.entries(occurencesCount)) {
    console.log(`${word} => ${count}`)
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
/*
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/