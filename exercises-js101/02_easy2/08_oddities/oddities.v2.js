
function oddities(elements) {
  if (elements.length === 0) {
    return []
  }

  return elements.filter((_, index) => {
    return index % 2 === 0;
  })
}



// Valid Cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []