// LS solution

function multiplicativeAverage(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}

/*
Discussion

The solution iterates over all the elements in the array. With each iteration, it multiplies the product variable's value by the value at the current index. After looping, it divides the product by the length of the numbers argument. It then calls the Number.prototype.toFixed method on the result, which rounds the number to 3 decimal places and converts it to a string.
*/