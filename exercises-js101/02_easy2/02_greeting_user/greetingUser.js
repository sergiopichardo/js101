/*
Write a program that will ask for user's name.
The program will then greet the user.

If the user writes "name!" then the computer
yells back to the user.

EXAMPLES
-------
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/

const readlineSync = require('readline-sync')
const { question } = readlineSync;


/**
 * @param {string} name
 * @return {string} - greeting
 */
function greet(name) {
  const screamed = hasScreamed(name)
  const message = createMessage(name, screamed)
  return message
}

/**
 * @return {string}
 */
function getName() {
  return question('What is your name? ')
}

/**
 * @param {string} string
 * @return {boolean}
 */
function hasScreamed(string) {
  return string.endsWith('!')
}

/**
 * @param {string} name
 * @param {boolean} screamed
 * @return {string} - message
 */
function createMessage(name, screamed) {
  let message = 'Hello'
  if (screamed) {
    name = name.slice(0, -1)
    message = `${message} ${name}. WHY ARE WE SCREAMING?`.toUpperCase()
  } else {
    message = `${message} ${name}.`
  }
  return message
}


/**
 * @param {string} message
 */
function displayMessage(message) {
  console.log(message);
}



// Main
// case 1
const name = getName() // Sergio
const greeting = greet(name)
displayMessage(greeting) // Hello Sergio.

