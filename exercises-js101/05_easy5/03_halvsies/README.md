# Halvesies
Write a function that takes an array as an argument, and
returns an array that contains two elements, each of which
is an array.

Put the first half of the original array
elements in the first element of the return value, and put
the second half in the second element.
If the original array contains an odd number of elements, place the middle element in the first half array.


## 1. Problem
Given a collection of elements. Split the collection into two halves based on the length of the collection.

### Input/s
1. Array of elements

### Output/s
1. 2D array with two elements

### Rules/Requirements
#### Explicit
1. Write a function that takes an array as an argument
2. The fuction must return a nested array containing two arrays
   - e.g. [[1, 2], [3, 4]]
3. Put the first half of the array in the first element, and
   the second half of the array in the second element.
4. If the array contains an odd number of elements,
   place the middle element in the first half array.

#### Implicit
1. The array can contain any data type.
   e.g. number, string, boolean, nulll, undefined, array, or object.
2. If the input array is empty return an empty 2D array



## 2. Examples/Test Cases
```
[1, 2, 3, 4]     --->  [[1, 2], [3, 4]]
[1, 5, 2, 4, 3]  --->  [[1, 5, 2], [4, 3]]
[5]              --->  [[5], []]
[]               --->  [[], []]
```

### Problem Domain
- 2D Arrays (nested arrays)
- Computing middle index
- Array slicing

### Mental Model

Given a collection of elements. Divide the collection in half and
place each half of the collection into its own separate array.

If the collection contains an odd amount of elements, capture the
element at the middle index and append into the first half array.

If the amount of elements in the collection is even, just divide
the collection in half (no need to find middle index element).
If the given collection of elements is empty, return an empty 2D
array. Finally, return the result as a 2D array of elements.

---
## 3. Data Structure
- Nested array of elements (2D array)

---
## 4. Algorithm
#### Pseudocode

```js
1. Create a function called `halvesies()` with a single parameter called `collection`.
2. If the input is empty return an 2D array
3. Create a variable called `middleIndex` that will be used to store the value computed by calling
    a helper function that calculates the array's required indexes for 1st and 2nd halves
    depending whether the collection is even or odd.
4. Slice the collection array from the first index to middle and store in a variable called `firstHalf`
5. Slice the collection array from the middle index until the end of the array and store in a variable called `secondHalf`
6. Return a 2D array that contains `firstHalf` and `secondHalf` arrays.
```

#### Formal pseudocode
```js
// Given a collection of elements called "collection"

FUNCTION halvesies(collection)
  IF collection is empty RETURN [[], []]

  SET middleIndex = SUBPROCESS "Compute middle index"

  SET firstPart = SUBPROCESS "Slice array from 0 - middle index"
  SET secondPart = SUBPROCESS "Slice array from middleIndex to end"

  RETURN [firstPart, secondPart]
ENDFUNCTION
```

#### Helper functions
- `computeMiddleIndex`: A function to compute middle index based on collection being even or odd

---
## 5. Code
- Implement the algorithm with code


#### Refactor
- Can we make the code more concise and still readable
- Do we need to change some variable or function names


#### Further Exploration
- What are other solutions people implemented?


