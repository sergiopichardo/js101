function digitList(number) {
  let numberStringArray = String(number).split("");
  let numberArray = [];

  for (let idx = 0; idx < numberStringArray.length; idx += 1) {
    let digit = parseInt(numberStringArray[idx], 10);
    numberArray.push(digit);
  }

  return numberArray;
}

/*
Discussion
---
The solution converts the number argument to a string, then uses the String.prototype.split method to split the string into an array of single-digit strings. It then iterates over the array, converting each digit string to a number and pushing it to the numberArray. Finally, the solution returns the numberArray.

Further Exploration
---
A more concise approach would be to use the Array.prototype.map method. Refactor the current solution to make use of this method, if you haven't already.
*/