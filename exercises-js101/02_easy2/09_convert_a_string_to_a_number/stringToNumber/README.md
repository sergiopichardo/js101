# Convert a String to a Number
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing. Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric. You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.


## 1. Problem
Short description of what we are trying to accomplish.

### Input/s
1. A string of numeric characters
   example: `"12345"`, `239`, or `0`

### Output/s
1. A number

### Rules/Requirements
#### Explicit
1. Write a function that takes a string of digits and returns
   the appropriate number as an integer.
2. You may not use the `Number()`, `parseInt`, or `String` methods.
3. You many not use any of the standard conversion methods.
4. Do not worry about `+` or `-` signs
5. Do not worry about **invalid characters**
6. **Assume all characters will be numeric**
7. Your function should calculate the result by analyzing the characters in the string.

#### Implicit
1. Use the equality operator (`==`) to compare the string value with a number.
    (a) `"4" == 4`, `true`


### Problem Domain
Type comparison using the `==` operator, type coercion.


### Mental Model
Given a string with numeric values using the `+` unary operator
to convert the string of numbers into a number.


## 2. Examples/Test Cases
"4321" --> 4321
"570"  --> 570

---
## 3. Data Structure
- no data structure is required.


---
## 4. Algorithm

#### pseudocode
1. Declare a function called `stringToInteger` that has a single parameter: `numberString`.
2. Use the `+` operator to parse the number string (e.g. `+("1")`, and return the result.

#### Formal pseudocode
**Mental Model 2**
```js
FUNCTION stringToInteger(numberString)
  RETURN +numberString
ENDFUNCTION
```

---
## 5. Code
- Implement the algorithm with code