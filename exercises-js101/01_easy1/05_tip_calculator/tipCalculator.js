/*
Create a simple tip calculator.
The program should prompt for a bill amount and a tip rate.
The program must compute the tip, and then log both the tip
and the total amount of the bill to the console.

You can ignore input validation and assume that the user
will enter numbers.
*/

const readlineSync = require('readline-sync')
const { questionFloat } = readlineSync;


/**
 * Get bill inputs
 * @return {{ billAmount: number, percentage: number }}
 */
const getBillInputs = () => {
  const billAmount = questionFloat('What is the bill? ')
  const tipPercentage = questionFloat('What is the tip percentage? ')
  console.log('')

  return { billAmount, tipPercentage }
}

/**
 * Calculate Bill Total
 * @param {number} billAmount
 * @param {number} tipAmount
 * @return {number}
 */
const calculateTotal = (billAmount, tipAmount) => {
  return billAmount + tipAmount
}

/**
 * Calculate tip percentage
 * @param {number} billAmount
 * @param {number} tipPercentage
 * @return {number}
 */
const calculateTip = (billAmount, tipPercentage) => {
  return billAmount * (tipPercentage / 100)
}


/**
 * Display Message
 */
const displayMessage = (message) => {
  console.log(message)
}

// Main
const { billAmount, tipPercentage } = getBillInputs()
const tipAmount = calculateTip(billAmount, tipPercentage)
const totalAmount = calculateTotal(billAmount, tipAmount)
displayMessage(`The tip is $${tipAmount.toFixed(2)}`)
displayMessage(`The total is $${totalAmount.toFixed(2)}`)