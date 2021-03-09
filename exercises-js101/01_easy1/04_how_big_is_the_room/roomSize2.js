/*
Further Exploration
------------------------
Modify the program so that it asks the user for
the input type (meters or feet).

Compute for the area accordingly, and log it and
its conversion in parentheses.
*/


const readlineSync = require('readline-sync')
const { prompt } = readlineSync;

const SQUARE_FEET_FACTOR = 10.7639;

const types = {
  NUMBER: 'number',
  STRING: 'string'
}

/**
 * Calculate the area of a room in meters
 * @param {number} length - length of a room
 * @param {number}  width - width of a room
 * @return {number} - area of a room in square meters
 */
function calculateAreaSquareMeters(length, width) {
  return length * width;
}


/**
 * Calculate the area of a room in square feet
 * @param {number} length
 * @param {number} width
 * @return {number} - area in square feet
 */
function calculateAreaSquareFeet(length, width) {
  return (length * width) * SQUARE_FEET_FACTOR;
}


/**
 * @typedef {Object} Dimensions - Room dimension
 * @property {number} length - The length of a room
 * @property {number} width - The width of a room
 */

/**
  * Prompt user to enter the `length` and `width` of a room
 * and returns the inputs in an object
 * @return {Dimensions}
 */
function getRoomDimensions() {
  displayMessage(`Enter the length of the room: `)
  const length = promptInput(types.NUMBER)

  displayMessage(`Enter the width of the room: `)
  const width = promptInput(types.NUMBER)

  return { length, width }
}

/**
 * Prompt user to enter unit type (meters/feet)
 * @return {string} - meters or feet
 */
function getUnitType() {
  displayMessage("Please enter the unit type (meters/feet): ")
  return promptInput(types.STRING)
}


/**
  * Returns a prompt based on a data type
 * @return {Object} - returns a prompt
 */
function promptInput(type) {
  let promptType;
  if (type === 'number')
    promptType = parseInt(prompt().trim(), 10)
  else if (type === 'string') {
    promptType = prompt().trim()
  }
  return promptType
}


/**
 * @param {number} area
 * @param {number} unitType
 * @return {string} - Area result message
 */
function constructMessage(area, unitType) {
  return `The area of the room is (${area.toFixed(2)} square ${unitType}).`
}

/**
 * Displays a message to the console
 * @param {string} message
 */
function displayMessage(message) {
  console.log(message)
}


// Main
const conversionOptions = {
  'meters': calculateAreaSquareMeters,
  'feet': calculateAreaSquareFeet
}

const unitType = getUnitType()
const { length, width } = getRoomDimensions();
const area = conversionOptions[unitType](length, width)
const message = constructMessage(area, unitType)
displayMessage(message);