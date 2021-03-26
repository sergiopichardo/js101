# ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns
a new string that contains the value of the original string
with all consecutive duplicate characters collapsed into a single character.


## 1. Problem
Given a string with consecutive duplicates. Collapse those duplicates into a single character.

### Input/s
1. String

### Output/s
1. String

### Rules/Requirements
#### Explicit
1. Write a function with one parameter
2. The function takes a string as an argument
3. Collapse `consecutive` characters into one

#### Implicit
1. If the input string size is 1, then return the input
2. If the input string is empty, then return an empty string


### Clarify questions
1.
2.
3.


## 2. Examples/Test Cases
---

**Case 1**:
```
input:  'ddaaiillyy ddoouubbllee'
output: "daily double"
```
---
**Case 2**:
```
input: '4444abcabccba'
output: "4abcabcba"
```
---
**Case 3**:
```
input: 'ggggggggggggggg'
output: "g"
```
---
**Case 4**:
```
input: 'a'
output: "a"
```
---
**Case 5**:
```
input: ''
output: ""
```

---
## 3. Data Structure
- String


### Mental Model
'ddaaiillyy ddoouubbllee'

Give a string with consecutive duplicate characters. Iterate over the string, as long as the current character is equal to the next character keep going. if the current character is not equal, add the current string to a result string. Finally return the result.


---
## 4. Algorithm

#### pseudocode
```js
1. Create an func called `dailyDouble` with a parameter called `characterSequence`.
2. If the size of `characterSequence` is zero
   - return an empty string
3. Create a variable called `collapsedSequence` and set to an empty string
4. Create a variable called `index` and set to zero
5. while the character at current index is same as the next one
   (a) add the current character to `collapsedSequence`
   (b) increment the `index` variable by one
6. return the `collapsedSequence` variable
```



```js
1. Create an empty array called `multiples` that will contain the list of multiples
2. Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3. For every `factor` in the `factors` list:
    1. Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
    2. While `current_multiple` < `target`
        1. Is the `current_multiple` in `multiples` already?
            1. Yes - do nothing
            2. No - Append the `current_multiple` to `multiples`.
        2. Add `factor` to `current_multiple`.
4. Compute and return the sum of the numbers in `multiples`.
```

#### Formal pseudocode
```js
START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
```


---
## 5. Code
- Implement the algorithm with code



#### Refactor
- Can we make the code more concise and still readable?
- Do we need to change some variable or function names?
- Should we divide functionality into other functions?
- Are we mutating the state?


#### Further Exploration
- What are other ways we can solve this problem?


