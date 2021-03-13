

// Author: Bob Rodes
/*
Array.prototype.reduce works the same way here. The only change, besides using HEX_TO_DECIMAL, is to change the base from 10 to 16.
*/

function hexToInteger(string) {
  const HEX_TO_DECIMAL = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
    A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
  }

  return string.split('').reverse().reduce( (acc, char, index) => {
    return acc + HEX_TO_DECIMAL[char.toUpperCase()] * 16**index;
  }, 0);
}


console.log(hexToInteger('4D9f') === 19871);