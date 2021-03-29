/*
Right Triangles (easy 3)
*/

let SPACE_CHAR = ' '
let STAR_CHAR = '*'

/**
 * @param {number} size
 */
function triangle(size) {
  let starLine = '';
  let starCount = 0;
  let spaces = size;

  for (let idx = 0; idx < size; idx += 1) {
    spaces -= 1;
    starCount += 1
    starLine = SPACE_CHAR.repeat(spaces) + STAR_CHAR.repeat(starCount)
    console.log(starLine);
    starLine = '';
  }
}


console.log(triangle(5));
/*
    *
   **
  ***
 ****
*****
*/

console.log(triangle(9));
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/