# Oddities
Write a function that returns an Array that contains every
other element of an Array that is passed in as an argument.

The values in the returned list should be those values that
are in the 1st, 3rd, 5th, and so on elements of the argument Array.


## Problem
---
### input
  valid array of values
### output
  array of values OR an empty array

### Rules
  Explicit:
    1. The function should return an array that contains every
      other element of the array that is passed as an argument

  Implicit:
    1. If an empty array is passed as an argument, then an empty
      array should be returned as a result.
    2. If an array with only 1 element is passed as an argument,
      then, return the same element

### Clarify questions:
  - What do we do if the wrong data type is passed in as an
    argument? Do we return an empty array as well? e.g. Object,
    string, undefined, null, boolean.
      A: return an empty array as well (e.g false -> [])


  - How do we validate that the array is an array?
     A: use Array.isArray() method

     Examples:
        Array.isArray([1, 2, 3]);  // true
        Array.isArray({foo: 123}); // false
        Array.isArray('foobar');   // false
        Array.isArray(undefined);  // false


  - Should we mutate the original array?
      A: No, we should return a copy with the applied changes


### Problem Domain:
  - Array iteration manipulating the increment clause.

### Mental Model:
  - Given an array of elements, use a guard clause to
    validate the array input. If an empty array or invalid input
    is given, return an empty array. Then, if the array has only
    one item, return the same array (not a copy).
    Finally, iterate over every other element, push the new items
    in a new array and return a new array with those elements.
    NOTE: Do not mutate original array.


## Examples/Test Cases
---
```
Valid Cases
[2, 3, 4, 5, 6]     -->  [2, 4, 6]
[1, 2, 3, 4, 5, 6]  --> [1, 3, 5]
["abc", "def"]      -->  ['abc']
[123]               --> [123]
[]                  --> []

Invalid Cases
{}                  --> []
"asdfasdf"          --> []
1234                --> []
false               --> []
undefined           --> []
null                --> []
```

## Data Structure
---
- An array will be used to hold every other value collected.


## Algorithm
---
```
Pseudocode
1. Validate the array using a function called `isInvalid`. If the
   array is invalid or empty.
    (a) return an empty array

2. If the array has only one item
    (a) return the same array

3. Create an empty array called `oddElements`

4. For every item in `elementsCopy`, increment the index by 2.
   (a) Push the current element into the `oddElements` array
    e.g. if the given input array is [2, 3, 4, 5, 6],
         then push 2, 4, and 6 into `oddElements`.

5. return `oddElementsArray`
```

## Formal Pseudocode
```
START

IF SUBPROCESS `is invalid array`
  RETURN []

IF elements is of size 1
  RETURN elements


SET oddElements = []

FOR every element in the elements array, increment index by 2
  oddElements.push(elements[i])

RETURN oddElements

END
```


## Code (with intent)
---
See files:
`oddLists.v1.js`
`oddLists.v2.js`
`oddLists.v3.js`