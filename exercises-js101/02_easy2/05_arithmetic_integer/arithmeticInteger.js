/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.
Do not worry about validating the input.
*/

const readlineSync = require('readline-sync');
const { questionInt } = readlineSync;


/**
 * Creates a prompt around a string (e.g. ==>)
 * @param {string} input
 * @return {string}
 */
const prompt = input => `==> ${input}`


/**
 * Prompts user to enter two numbers and
 * returns the value
 * @return {number[]}
 */
function getNumbersFromUser() {
  displayMessage(prompt('Enter the first number: '))
  const firstNumber = questionInt()

  displayMessage(prompt('Enter the second number: '))
  const secondNumber = questionInt()
  return [firstNumber, secondNumber]
}

/**
 * Log a message to the screen
 * @param {string} message
 */
function displayMessage(message) {
  console.log(message);
}

// Main
const operationsMap = {
  addition: (a, b) => `${a} + ${b}) = ${a + b}`,
  addition: (a, b) => `${a} + ${b}) = ${a + b}`,
  subtraction: (a, b) => `${a} - ${b}) = ${a - b}`,
  multiplication: (a, b) => `${a} * ${b}) = ${a * b}`,
  division: (a, b) => `${a} / ${b}) = ${Math.floor(a / b)}`,
  modulo: (a, b) => `${a} % ${b}) = ${a % b}`,
  exponentiation: (a, b) => `${a} ** ${b}) = ${a ** b}`
}

const [firstNumber, secondNumber] = getNumbersFromUser()
for (let operation of Object.keys(operationsMap)) {
  let result = operationsMap[operation](firstNumber, secondNumber)
  displayMessage(prompt(result))
}


/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/