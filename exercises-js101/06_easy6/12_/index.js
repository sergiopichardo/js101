/*
Matching Parentheses?

Write a function that takes a string as argument, and
returns true if all parentheses in the string are properly
balanced, false otherwise.

To be properly balanced, parentheses must occur in matching
'(' and ')' pairs.

1. if the filtered string has an odd length it is unbalanced
2. if the first item isn't a ( it is unbalanced

closingBracesNeeded = 0;
*/

//(())())

/*
()
)
(
(()())

(())())

)(
(()))(
*/


function isBalanced(string) {
  let filteredString = removeLetters(string).split('')
  let closingBracesNeeded = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    if (filteredString[idx] === '(') {
      closingBracesNeeded += 1;
    } else if (filteredString[idx] === ')') {
      if (closingBracesNeeded === 0) return false;
      closingBracesNeeded -= 1;
    }
  }

  return (closingBracesNeeded === 0 );
}

function removeLetters(string) {
  const regex = /[^()]/g;
  return string.replace(regex, "");
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


