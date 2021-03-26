function crunch(text) {
  let index = 0;
  let crunchText = '';

  // 4444abcabccba => 13 characters
  while (index === text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}


console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba'));           // "4abcabcba"
console.log(crunch('ggggggggggggggg'));         // "g"
console.log(crunch('a'));                       // "a"
console.log(crunch(''));                        // ""