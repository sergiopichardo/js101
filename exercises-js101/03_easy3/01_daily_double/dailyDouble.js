/*
Daily Double
*/

/**
 * @param {string}
 * @return {string}
 */
function crunch(charSequence) {
  if (!charSequence) return '';

  let collapsedSequence = '';
  let index = 0;

  while (charSequence[index] !== undefined) {
    if (charSequence[index] !== charSequence[index + 1]) {
      collapsedSequence += charSequence[index]
    }
    index += 1;
  }

  return collapsedSequence;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba'));           // "4abcabcba"
console.log(crunch('ggggggggggggggg'));         // "g"
console.log(crunch('a'));                       // "a"
console.log(crunch(''));                        // ""