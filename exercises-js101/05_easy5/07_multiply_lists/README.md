# Multiply Lists

Write a function that takes two array arguments, each containing
a list of numbers, and returns a new array that contains the
product of each pair of numbers from the arguments that have
the same index.

You may assume that the arguments contain the same number of
elements.


## 1. Problem
Short description of what we are trying to accomplish.

### Input/s
1. Array of integers 1
2. Array of integers 2

### Output/s
1. Array of integers

### Rules/Requirements
#### Explicit
1. Write a function with two parameters
2. The function takes two lists of integers
3. Returns the product of each pair of numbers
   from the arguments that have the same index.
4. Assume the arguments contain the same number of elements

#### Implicit
1. The numbers will be positive integers
2. The input arrays will never be empty


### Mental Model
**Example:**
Determine a list of all multiples of a set of factors up to a target value, then filter the list of multiples to the unique values. Finally, compute and return the sum of the unique multiples.

Iterate over one of the lists of numbers. Multiply the numbers at the same index
and push the product to a new list. Finally, return the result.

## 2. Examples/Test Cases
- Validate Understanding of the Problem.
- e.g. If the input is an empty array what do we return?
- e.g. If the input is 0 what do we return?
- e.g. Should we account for negative numbers?

---
**Case 1**
```
Given two arrays with positive numbers,
it should return one array with the products
of the numbers at the same index.

input:  [3, 5, 7], [9, 10, 11]
output: [27, 50, 77]
```
---
**Case 2**:
```
Given two empty arrays, return an empty array

input:  [], []
output: []
```

---
## 3. Data Structure
- Array
---

## 4. Algorithm
The steps that will be needed to solve the problem
- Are we mutating the original array or object?
- Helper functions?

#### pseudocode
```js
1. Create a func called `multiplyLists` with two parameters called `numListA` and `numbListB`.
2. Create an empty array called `resultList`
3. For every `number` in `numListA`
  (a) Multiply the numbers in `numListA` and `numListB` corresponding to the current index in the iteration.
  (b) Push the product of both numbers to `resultList`
4. Return the result.
```

#### Formal pseudocode
```js


FUNCTION multiplyLists(numListA, numListB)
  SET resultList = []
  FOR every `number` in `numberListA`, increment the `index` by 1
    SET product = multiply the numbers for `numberListA` and `numberListB` at the current index.
    ADD `product` to the `resultList` collection
  ENDFOR

  RETURN resultList
ENDFUNCTION

```


---
## 5. Code
- Implement the algorithm with code



#### Refactor
- Can we make the code more concise and still readable
- Do we need to change some variable or function names


#### Further Exploration
- What are other solutions people implemented?


