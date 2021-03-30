/*
Madlibs

Madlibs is a simple game where you create a story template with
 "blanks" for words. You, or another player, then construct a
 list of words and place them into the story, creating an often
 silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb,
an adverb, and an adjective, and injects them into a story that
you create.
*/

const readlineSync = require('readline-sync')
const { question } = readlineSync;

/**
 * Creates madlibs game
 */
function madlibs() {
  // get noun from user
  let noun = getUserInput('noun')
  let verb = getUserInput('verb')
  let adjective = getUserInput('adjective')
  let adverb = getUserInput('adverb');

  return constructMessage(noun, verb, adjective, adverb);
}

/**
 * @param {string} wordType
 * @return {string} - a valid user input (e.g. noun, verb, ...)
 */
function getUserInput(wordType) {
  let questionMessage = `Enter a ${wordType}: `
  let word = question(questionMessage)
  while (!isValid(wordType)) {
    displayMessage(`The ${wordType} you entered is not valid.`)
    word = question(questionMessage)
  }
  return word
}

/**
 *
 * @param {string} noun
 * @param {string} verb
 * @param {string} adjective
 * @param {string} adverb
 * @return {string} - return madlibs story
 */
function constructMessage(noun, verb, adjective, adverb) {
  let story = '';
  story += `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\n`
  story += `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\n`
  story += `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.\n`;
  return story;
}


/**
 * Validates if input is a valid string
 * @param {string} word
 * @return {boolean} - true if valid, false otherwise.
 */
function isValid(word) {
  return word.length > 3;
}


/**
 * @param {string} message
 */
function displayMessage(message) {
  console.log(message);
}

console.log(madlibs())

/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/