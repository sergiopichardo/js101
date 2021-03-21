# Multiplicative Average
Write a function that takes an array of integers as input,
multiplies all of the integers together, divides the result
by the number of entries in the array, and returns the result
as a string with the value rounded to three decimal places.


## 1. Problem
Given an array of numbers, multiply all the numbers and
calcuate the average rounded to three decimal places.

### Input/s
1. Array of integers

### Output/s
1. String

### Rules/Requirements
#### Explicit
1. Write a function with one parameter
2. The function must calculate the product of all numbers
3. The function must divide the product by the number of entries
4. The function must return the result as a string rounded to 3 decimal places


#### Implicit
1. The function must be able to calculate the product of negative numbers as well
2. The function must return 0 if the array is empty
3. The function must return 0 if 0 is included in the input array


### Clarify questions
1. What to we do if the input is an array of negative integers?
2. What to we do if the input is an array of mixed with negative and positive integers?
3. What to we do if the input is an empty array?


### Problem Domain
- Calculating the product
- Calculating the mean


### Mental Model
Given a collection of integers, calculate the product of the integers
elements in the collection. Divide the products by the collection size.
Return the result as a formatted string rounded to 3 decimal places.


## 2. Examples/Test Cases

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"


---
## 3. Data Structure
- Array

---
## 4. Algorithm
#### Pseudocode
```js
1. Create a func called `multiplicativeAverage` with a parameters called `integers`.
2. Create a variable called `integersCount` to store the size of the `integers` collection.
3. Create a variable called `product` to store the result of calculating the product
   of all integers in `integers` collection.
4. Create a variable called `average` and divide `product` by `integersCount` and round
   result to 3 decimal places.
5. Return the `average` variable
```

#### Formal pseudocode
```js

FUNCTION multiplicativeAverage(integers)
  SET integersCount = SUBPROCESS "Calculate the size of integers collection"
  SET product = SUBPROCESS "Calculate the product of integers collection"
  SET average = SUBPROCESS "Calculate average of integers collection and round to 3 decimal places"

  RETURN average

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


