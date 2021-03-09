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

function assertEqual(actual, expected, message) {
  let isEqual = (actual === expected)
  let testMessage = createMessage(actual, expected, message)
  console.log(isEqual ? testMessage.passed : testMessage.failed);
}

module.exports = {
  assertEqual
}