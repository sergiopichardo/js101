# Find the Duplicate
Given an unordered array and the information that exactly one
value in the array occurs twice (every other value occurs exactly
once), determine which value occurs twice. Write a function that
will find and return the duplicate value that is in the array.



## 1. Problem
Find the duplicate element in a collection.

### Input/s
1. An array of numbers

### Output/s
1. A number

### Rules/Requirements
#### Explicit Rules
1. Exactly one value in the array occurs twice
2. Every other character occurs exactly once

#### Requirements
3. Find the duplicate value in the array.


### Problem Domain
- Array Searching

### Mental Model
Iterate over the given array, check if the current element exists
in an pre-created object. If it does not exist, add the value as a
key and increment its value until you reach the end of the array.
Turn the object containing the numbers count into a 2D array where each
element is an array where index 0 is the key and index 1 is the value.
Iterate over the nested array the element with a value of 2 is found.
Finally return the element at index 0.


## 2. Examples/Test Cases
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73


---
## 3. Data Structure
- Object
- 2D Array

---
## 4. Algorithm

#### pseudocode
```js
1. Create a func called `findDup` with a parameter called `collection`
2. Create an empty object called `duplicatesMap`
3. For every element in the collection
    1. If the current element does not exist
       (a) add the value as a key in the object
    2. Otherwise
       (b) increment the value for that key
4. Convert the `duplicatesMap` object into a 2D array and named it `DuplicatesCollection`. (Object.entries)
5. Create a variable `foundDuplicate` to store the found duplicate and set it to 0.
5. Iterate over the 2D array
    1. If the current nested array has an element at index 1 has a value of two.
      (a) Set the `foundDuplicate` variable to the key stored at index 0.
6. return the `foundDuplicate` variable.
```

#### Formal pseudocode
```js
FUNCTION findDup(collection)
  SET duplicateMap = {}

  FOR every `element` in the `collection`
    IF the the element does not exists as a key in `duplicateMap`
      duplicateMap[element] = 1
    ELSE
      duplicateMap[element] += 1
    ENDIF
  ENDFOR

  SET duplicatesCollection = SUBPROCESS "convert object into a 2D array"
  SET foundDuplicate = 0

  FOR every `innerArray` in the the nested array (2D array)
    IF `innerArray[1]` === 2
      foundDuplicate = `innerArray[0]`
    ENDIF
  ENDFOR

  RETURN foundDuplicate

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


