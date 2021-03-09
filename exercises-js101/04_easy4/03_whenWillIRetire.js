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
const { question } = readline;


// get user input
function getUserInput() {
  let userAge = question('What is your age? ')
  let retirementAge = question('At what age would you like to retire? ')
  return { userAge, retirementAge }
}

// get current year
function getYear() {
  return new Date().getFullYear();
}

// calculate retirement year
function getRetirementYear(currentYear, yearsUntilRetirement) {
  return currentYear + yearsUntilRetirement;
}

// calculate years until retirement
const getYearsUntilRetirement = (userAge, retirementAge) => {
  return retirementAge - userAge;
}

// connstuct the message
function constructMessage(data) {
  const { currentYear, retirementYear, yearsUntilRetirement } = data
  return [
    `It's ${currentYear}. You will retire in ${retirementYear}.`,
    `You have only ${yearsUntilRetirement} years of work to go!`
  ]
}


// display the message
function displayMessage(messages) {
  messages.forEach((message) => {
    console.log(message);
  });
}


// Main program
const { userAge, retirementAge } = getUserInput();
const currentYear = getYear();
let yearsUntilRetirement = getYearsUntilRetirement(userAge, retirementAge);
let retirementYear = getRetirementYear(currentYear, yearsUntilRetirement);
const data = { currentYear, retirementYear, yearsUntilRetirement };
const message = constructMessage(data);
displayMessage(message)
