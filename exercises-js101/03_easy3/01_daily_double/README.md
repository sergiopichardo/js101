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
5. while the character at current index is not undefined
      if the current character is not equal to the next character
          (a) add the current character to `collapsedSequence`
      (a) increment the `index` variable by one
6. return the `collapsedSequence` variable
```

---
## 5. Code
- Implement the algorithm with code
