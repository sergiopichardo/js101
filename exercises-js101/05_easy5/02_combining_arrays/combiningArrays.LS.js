// Solution 1
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

// Solution 2
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union() {
  let newArray = [];

  for (let idx = 0; idx < arguments.length; idx += 1) {
    copyNonDupsTo(newArray, arguments[idx]);
  }

  return newArray;
}




