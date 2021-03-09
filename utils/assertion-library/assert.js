const chalk = require('chalk')

const status = {
  passed: true,
  failed: false
}

function createMessage(actual, expected, message) {
  return {
    passed: chalk.green(`passed`) + ` [${message}]`,
    failed: chalk.red(`FAILED`) + ` [${message}], expected '${expected}', but got '${actual}'.`
  }
}

/**
 * Compares two primitive values and returns true if equal
 * @param {number|string|boolean|null|undefined} actual
 * @param {number|string|boolean|null|undefined} expected
 * @return {boolean} - true or false
 */
function assertEqual(actual, expected, message) {
  let isEqual = (actual === expected)
  let testMessage = createMessage(actual, expected, message)
  console.log(isEqual ? testMessage.passed : testMessage.failed);
}



module.exports = {
  assertEqual
}