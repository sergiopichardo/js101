// Author: Bob Rodes


function range(min, max) {

  // max - min + 1 is the formula
  // to find the amount of numbers between min and max
  // max - min + 1 = 10 - 1 + 1 = 10
  return Array.from({length: max - min + 1}, (_, i) => i + min);
}

function multisum(num) {
  return range(1, num).filter((d) => d % 3 === 0 || d % 5 === 0)
                      .reduce((acc, n) => acc + n, 0);
}
