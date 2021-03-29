# Right Triangles
Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars.

The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.


## 1. Problem
### Input/s
1. positive integer

### Output/s
1. String

### Rules/Requirements
#### Explicit
1. Write a function with one parameter.
2. The function takes one a positive integer and returns a triangle as a string.
3. All sides have `n` stars

#### Implicit
1. If given `0` as an argument, it should return an empty string.
2. If given no arguments, it should return an empty string.
3. The triangle is a `30-60-90` triangle
4. The longest side (the hypothenuse) is facing left, the shortest side of the triangle is the bottom side, and the other side is facing right.


## 2. Examples/Test Cases
**Case 1**
```
input:  5
output:
    *
   **
  ***
 ****
*****
```

---
**Case 2**:
```
input:  9
output:
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
```

### Mental Model
Track the number of stars and the number of spaces we'll need to to create the triangle. Use the input to iterate that many times.
Store the spaces and stars, to log them to the console at the end. Decrement the number of spaces as you iterate, and increment the number of stars, log the result. Reset the output string.


---
## 3. Data Structure
- String (starLine)

---
## 4. Algorithm
#### pseudocode
```js
1. Create a fn called `triangle` with a parameter called `size`.
2. Create a variable called `starLine` and set to empty string.
3. Create a variable called `starCount` and set to 0.
4. Create a variable called `spaces` and set to `size`.
5. Iterate from 0 to `size`
    (a) Decrement `spaces` by 1.
    (b) Increment `starCount` by 1.
    (c) Repeat the number of white space stored in `spaces` and
        add to `starLine`.
    (d) Repeat the number of stars using `starCount` and
        add to `starLine`.
    (e) Log starLine to the console
    (f) set starLine back to an empty string
```

#### Formal pseudocode
```js
FUNCTION triangle(size)
  SET `starLine` = ''
  SET `starCount` = 0
  SET `spaces` = size

  FOR each `number` from 0 `size`
    DECREMENT `spaces` by 1
    INCREMENT `starCount` by 1
    `spaces` = SUBPROCESS "repeat an 1 char long empty string n times"
    `starCount` = SUBPROCESS "repeat the star character `*` (n + 1) number of times"
    `starLine` = spaces + starCount
    PRINT starLine
    starLine = '';
ENDFUNCTION
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


