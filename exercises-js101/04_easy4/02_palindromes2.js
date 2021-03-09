/*
Write another function that returns true if the string
passed as an argument is a palindrome, or false otherwise.
This time, however, your function should be case-insensitive,
and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the isPalindrome
function you wrote in the previous exercise.
*/


const nonAlphaNumeric = [
  "!", "@", "#", "&", "(", ")", "–", "[",
  "{", "}", "]", ":", ";", "'",",", "?",
  "/", "*","`", "~", "$", "^", "+", "=",
  "<", ">", '“', ' '
];


/**
 * Removes all non-alphanumeric characters from a string
 * @param {string} string
 * @return {string}
 */
function removeNonAlphanumeric(string) {
  const splitString = string.split("")
  let length = splitString.length;

  let resultArray = []
  for (let i = 0; i < length; i++) {
    if(!nonAlphaNumeric.includes(splitString[i])) {
      resultArray.push(splitString[i]);
    }
  }
  return resultArray.join("");
}


/**
 * Checks if a string is a palindrome, case-sensitive
 * @param {string} string
 * @return {boolean}
 */
function isPalindrome(string) {
  return (string.split("").reverse().join("") === string);
}


/**
 * Checks if a string is a real palindrome, case-insensitive
 * @param {string} string
 * @return {boolean}
 */
function isRealPalindrome(string) {
  string = string.toLowerCase();
  const palindrome = removeNonAlphanumeric(string)
  return isPalindrome(palindrome)
}



console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false