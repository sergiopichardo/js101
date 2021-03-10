/*
Write a function that returns true if its integer argument is palindromic, or
false otherwise. A palindromic number reads the same forwards and backwards.
*/

/**
 * Returns boolean if number is palindromic
 * @param {number} number - integer
 * @return {boolean} number
 */
 function isPalindromicNumber(number) {
  number = Number(number);
  return String(number) === String(number).split("").reverse().join("")
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}
