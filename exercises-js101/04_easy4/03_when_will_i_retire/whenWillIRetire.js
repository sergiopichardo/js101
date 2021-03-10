/*
Build a program that logs when the user will retire
and how many more years the user has to work until retirement.

Example
-----------------------------------------
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/
const readline = require('readline-sync');
const { questionInt } = readline;


/**
 * Get user age and retirement age from user
 * @return {{ userAge: number, retirementAge: number}}
 */
function getUserInput() {
  let userAge = questionInt('What is your age? ')

  while (userAge === 0 || Number.isNaN(userAge) || userAge < 0) {
    console.clear()
    displayMessage('Please enter a valid age')
    displayMessage('e.g. between 1 and 120')
    userAge = questionInt('What is your age? ')
  }

  let retirementAge = questionInt('At what age would you like to retire? ')

  while (retirementAge === 0 || Number.isNaN(retirementAge) &&
  (retirementAge > 0 && retirementAge <= 120)) {
    console.clear()
    displayMessage('Please enter a valid retirement age')
    disiplayMessage('e.g. between your current age and 120')
    retirementAge = questionInt('At what age would you like to retire? ')
  }

  return { userAge, retirementAge }
}


/**
 * Get the current year
 * @returns {Object} - Date() object
 */
function getYear() {
  return new Date().getFullYear();
}


/**
 * Calculate retirement
 * @param {number} currentYear
 * @param {number} yearsUntilRetirement
 * @returns {number}
 */
function getRetirementYear(currentYear, yearsUntilRetirement) {
  return currentYear + yearsUntilRetirement;
}


/**
 * Calculate years until retirement
 * @param {number} userAge
 * @param {number} retirementAge
 * @returns {number}
 */
const getYearsUntilRetirement = (userAge, retirementAge) => {
  return retirementAge - userAge;
}


/**
 * Connstuct the output message
 * @param {Object} retirementData
 * @returns {string[]}
 */
function constructMessage(retirementData) {
  const { currentYear, retirementYear, yearsUntilRetirement } = retirementData
  return [
    `It's ${currentYear}. You will retire in ${retirementYear}.`,
    `You have only ${yearsUntilRetirement} years of work to go!`
  ]
}


/**
 * Display the output message
 * @param {string} messages
 */
function displayMessage(messages) {
  if (typeof messages === 'string') {
    console.log(messages)
  } else {
    messages.forEach((message) => {
      console.log(message);
    });
  }
}


// Main program
const { userAge, retirementAge } = getUserInput();
const currentYear = getYear();
let yearsUntilRetirement = getYearsUntilRetirement(userAge, retirementAge);
let retirementYear = getRetirementYear(currentYear, yearsUntilRetirement);
const retirementData = { currentYear, retirementYear, yearsUntilRetirement };
const message = constructMessage(retirementData);
displayMessage(message)
