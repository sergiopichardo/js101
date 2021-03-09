/*
Write a program that asks the user to enter an integer
greater than 0, then asks whether the user wants to
determine the sum or the product of all numbers
between 1 and the entered integer, inclusive.
*/

const readlineSync = require('readline-sync')
const { questionInt, question } = readlineSync;


/**
 * Get integer greater than zero
 * @return {number} - e.g. 2, 15, 8, 100, etc.
 */
const getIntegerInput = () => {
  return questionInt("Please enter an integer greater than 0: ")
}


/**
 * Get operation choice
 * @return {string}
 */
const getOperationChoice = () => {
  const operation = question('Please enter "s" to compute the sum, or "p" to compute the product: ')
  console.log('')
  return operation
}


/**
 * Display message based on operation chosen
 * @param {string} operation
 * @return {string} - message
 */
const createMessage = (operation, limit, total) => {
  return `The ${operation} of the integers between 1 and ${limit} is ${total}`
}

/**
 * Sum consecutive integers from 1 to n (inclusive)
 * @param {number} limit
 * @return {number}
 */
const calculateSum = (limit) => {
  let total = 0;
  for (let i = 0; i <= limit; i += 1) {
    total += i
  }
  return total
}


/**
 * Multiply consecutive integers from 1 to n (inclusive)
 * @param {number} limit
 * @return {number}
 */
const calculateProduct = (limit) => {
  let total = 1;
  for (let i = 1; i <= limit; i += 1) {
    total *= i
  }
  return total
}


/**
 * Display Message
 * @param {string} message
 */
const displayMessage = (message) => {
  console.log(message)
}


/**
 * @param {string} operationChar
 * @return {string}
 */
const getOperationWord = (operationChar) => {
  let operationWord;
  if (operationChar === 's') {
    operationWord = "sum"
  } else if (operationChar === 'p') {
    operationWord = "product"
  }
  return operationWord
}




// Main
const operationChoices = {
  's': calculateSum,
  'p': calculateProduct
}

const limit = getIntegerInput()
const operationChoice = getOperationChoice()
const operationWord = getOperationWord(operation)
const total = operationChoices[operationChoice](limit)
const message = createMessage(operationWord, limit, total)
displayMessage(message);


