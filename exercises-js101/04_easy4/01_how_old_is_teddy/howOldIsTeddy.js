/*
Build a program that randomly generates Teddy's age, and logs
it to the console.
Have the age be a random number between 20 and 120 (inclusive).
*/


/**
 * Generate a number between two limits
 * @param {number} min
 * @param {number} max
 * @return {number} - random number
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}


/**
 * Construct age message
 * @param {number} age
 * @param {string} name
 * @return {string}
 */
function constructMessage(name, age) {
  return `${name} is ${age} years old!`
}

/**
 * Display message
 * @param {string} message
 */
function displayMessage(message) {
  console.log(message)
}


// Main Program
const age = generateRandomNumber(20, 120);
const message = constructMessage('Teddy', age)
displayMessage(message);

