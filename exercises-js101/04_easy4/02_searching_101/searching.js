/*
Write a program that solicits six numbers from the user,
then logs a message that describes whether or not the
sixth number appears amongst the first five numbers.
*/

const readlineSync = require('readline-sync')
const { question } = readlineSync;

/**
 * Get 6 numbers from the user
 * @return {number[][]} - [sixthNumber, numbersList]
 */
function getSixNumbers() {
  const numberLabels = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  let numbers = []

  for (let i = 0; i < 6; i++) {
    let number = question(`Enter the ${numberLabels[i]} number: `)
    numbers.push(number)
  }

  let sixthNumber = numbers[numbers.length-1]

  return [sixthNumber, numbers]
}


/**
 * Checks if 6th number is within the first 5 numbers
 * @param {number[]}
 * @return {boolean}
 */
function isSixthNumberIncluded(numbers) {
  let sixthNumber = numbers.pop()
  return numbers.includes(sixthNumber)
}


/**
 * Returns a message wether the 6th number appears in
 * the first 5 numbers
 * @param {boolean} isNumberIncluded
 * @param {number} targetNumber
 * @param {number[]} numbers
 * @return {string}
 * @example - if true: The number 17 appears in 25,15,20,17,23.
 * @example - if false: The number 18 does not appear in 25,15,20,17,23.
 */
function constructMessage(isNumberIncluded, targetNumber, numbers) {
  if (isNumberIncluded) {
    return `The number ${targetNumber} appears in ${numbers.join(",")}.`
  }
  return `The number ${targetNumber} does not appear in ${numbers.join(",")}.`
}


/**
 * Display message
 * @param {string} message
 */
function displayMessage(message) {
  console.log("")
  console.log(message);
}



// Main program
const [sixthNumber, numbers] = getSixNumbers()
const isNumberIncluded = isSixthNumberIncluded(numbers)
const message = constructMessage(isNumberIncluded, sixthNumber, numbers);
displayMessage(message)






/*
Test cases

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/