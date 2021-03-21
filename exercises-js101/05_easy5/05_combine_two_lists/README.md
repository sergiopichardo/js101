# Combine Two Lists
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both
array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

## 1. Problem
Combine two arrays into one, alternating one element from
each array.

### Input/s
1. Two arrays of elements

### Output/s
1. One array

### Rules/Requirements
#### Explicit
1. Return an array that contains all elements with each element in alternation.
2. Arrays will always contain elements
3. Arrays will always have the same amount of elements

#### Implicit
1.
2.
3.

### Clarify questions
1.
2.
3.



### Mental Model
Create an array an empty array that will be used to push all elements from
both arrays. Iterate for the combined lengths of both arrays. If the current
index is even, then push an element from array 1, else if the current index
is odd, then push the first item from array two in the new list. Finally,
return the new array with the alternating values as a result.


## 2. Examples/Test Cases
[1, 2, 3], ['a', 'b', 'c']   --->   [1, 'a', 2, 'b', 3, 'c']

---
## 3. Data Structure
- Array

---
## 4. Algorithm
```js
1. Create a func called `interleave` that takes two arrays as parameters called `listA`, and `listB`
2. Create an empty array called `alternatingList`
3. Iterate every element in `list A`
    (a) Push the 1st item from Array 1 into `alternatingList`
    (b) Push the 1st item from Array 2 into `alternatingList`
4. Return the `alternatingList` variable.
```

#### Formal pseudocode
```js
FUNCTION interleave(listA, listB)
  SET alternatingList = []

  FOR every item in listA
      push the current item from List A into `alternatingLists`
      push the current item from List B into `alternatingLists`
  ENDFOR

  RETURN alternatingList

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

NOTES:
- How can we make this solution work for 3 arrays? or N arrays?


