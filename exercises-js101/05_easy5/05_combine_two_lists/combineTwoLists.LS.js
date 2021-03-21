
function interleave(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}

/*
Discussion

Discussion
The solution iterates n number of times; where n is the value of the length of either array1 or array2. At every iteration it pushes the appropriate values from array1 and array2 to the newArray variable. Since push can take one or more arguments, we take a shortcut and push both values at the same time instead of calling push twice.

Further Exploration
Try to solve this problem using Array.prototype.forEach method.

Can you solve it using map or reduce?
*/