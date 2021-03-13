/**
 * Return every other element in an array
 * @param {*[]} elements
 * @return {*[]}
 */
function oddities(elements) {
  if (isInvalid(elements)) return [];
  if (elements.length === 1) return elements;

  let oddElements = [];

  for (let index = 0; index < elements.length; index += 2) {
    oddElements.push(elements[index]);
  }

  return oddElements;
}

/**
 * Validates if an array is not an array or
 * if the array is empty
 * @param {*} input
 * @result {boolean}
 */
function isInvalid(input) {
  if (typeof input === 'undefined' || !Array.isArray(input)) {
    return true;
  }

  return false;
}

// Valid Cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Invalid Cases
console.log(oddities({}));  // logs []
console.log(oddities("asdfasf"));  // logs []
console.log(oddities(12345));  // logs []
console.log(oddities(false));  // logs []
console.log(oddities(undefined));  // logs []
console.log(oddities(null));  // logs []