// LS Solution

function average(numbers) {
  let sum = 0;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }

  return Math.floor(sum / numbers.length);
}


average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40