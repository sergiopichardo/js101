// Launch School solution

/*
Halvesies

Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.
*/

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

/*
Discussion

The basic task is to split the array argument into two pieces: a first and a second half. The solution gets the size of the first half by dividing the array argument's length by 2. If the length is odd, the Math.ceil method will account for it, making the first half larger than the second by 1. It creates the second half based on the size of the first half. It uses the Array.prototype.slice method to create both halves. Finally, it returns the halvsies arrays composed of the firstHalf and secondHalf as elements.
*/


