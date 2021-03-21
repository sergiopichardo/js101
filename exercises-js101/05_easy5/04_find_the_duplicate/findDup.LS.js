// Author: Launch School

// Solution 1
function findDup(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}


// Solution 2
function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
}