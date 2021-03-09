const asciiValue = (str) => {
  let asciiValue = 0;
  for (const character of str) {
    asciiValue += character.charCodeAt();
  }
  return asciiValue;
};


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0