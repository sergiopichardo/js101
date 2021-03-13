/**
 * Return the next to last word
 * @param {string} words
 * @return {string}
 */
 function penultimate(words) {
  const wordsList = words.split(" ")
  return wordsList[wordsList.length - 2];
}

penultimate("last word");