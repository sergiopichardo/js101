/*
Stringy Strings

Write a function that takes one argument, a positive integer,
and returns a string of alternating '1's and '0's, always
starting with a '1'. The length of the string should match
the given integer.
*/



// 1. Step #1: Declare a function called `stringy` that takes a parameter called `integer`
function stringy(integer) {
  // 2. Step #2: Declare a variable called `result` and set to an empty string ""
  let result = '';

  // 4. Step #4: Loop amount of times the `integer` equals to
  for (let idx = 0; idx < integer; idx += 1) {
    // 5. Step #5: inside of the loop, if the index is *even* and concatenate "1" to `result`
    if (idx % 2 === 0) {
      result += 1
    } else {
    // 6. Step #6: inside of the loop, else the index is *odd* and concatenate "0" to `result`
      result += 0
    }
  }
  // 7. Step #7: Return `result` string
  return result;
}



const stringify = integer => {
  return Array.from({ length: integer }, (_, idx) => idx)
              .reduce((accum, value, _) =>  value % 2 === 0 ? accum + 1 : accum + 0, "")
}

console.log(stringify(6))


// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"