/*
Build a program that asks the user to enter the length
and width of a room in meters, and then logs the area
of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the `readlineSync.prompt` method to collect user input.

-------------
EXAMPLE
-------------
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/


/*
  Mental Model
  Ask user for length and a width of room and return
  the area of a room in square meters and square feet.
*/

/*
  Problem Domain
  - Area of Rectangle
    A = w * l
*/


const readlineSync = require('readline-sync')
const { prompt } = readlineSync;

const SQUARE_FEET_FACTOR = 10.7639;


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
 * @param {number} areaSquareMeters
 * @return {number} - area in square feet
 */
function calculateAreaSquareFeet(areaSquareMeters) {
  return areaSquareMeters * SQUARE_FEET_FACTOR;
}


/**
 * @typedef {Object} Area - Area in meters
 * @property {number} length - The length of a room in meters
 * @property {number} width - The width of a room in meters
 */

/**
  * Prompt user to enter the `length` and `width` of a room
 * and returns the inputs in an object
 * @return {Area}
 */
function getRoomInputs() {
  displayMessage("Enter the length of the room in meters: ")
  const length = promptInput()

  displayMessage("Enter the width of the room in meters: ")
  const width = promptInput()

  return { length, width }
}


/**
 * Prompts the user to enter a room input and returns it
 * @return {number} - return any value
 */
function promptInput() {
  return parseInt(prompt().trim(), 10)
}


/**
 * @param {{areaSquareMeters: number, areaSquareFeet: number}}
 * @return {string} - Areas result message
 */
function constructResultMessage(areas) {
  const { areaSquareMeters, areaSquareFeet } = areas;
  return `The area of the room is ${areaSquareMeters.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)} square feet).`
}

/**
 * Displays a message to the console
 * @param {string} message
 */
function displayMessage(message) {
  console.log(message)
}


// Main
const { length, width } = getRoomInputs();
const areaSquareMeters = calculateAreaSquareMeters(length, width);
const areaSquareFeet = calculateAreaSquareFeet(areaSquareMeters);
const areas = { areaSquareMeters, areaSquareFeet }
const message = constructResultMessage(areas)
displayMessage(message)