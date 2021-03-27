function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    console.log('fibonacci number:', fibonacci)
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

let result = findFibonacciIndexByLength(2n)
console.log(result);    // 1 1 2 3 5 8 13
console.log(result === 7n);    // 1 1 2 3 5 8 13