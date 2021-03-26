# After Midnight (part 1)
The time of day can be represented as the number of minutes
before or after midnight. If the number of minutes is `positive`,
the time is `after midnight`.
If the number of minutes is `negative`, the time is `before midnight`.

Write a function that takes a time using this minute-based format
and returns the time of day in 24 hour format (hh:mm).
Your method should work with any integer input.

You may not use javascript's Date class methods.

The tests should log true.

Disregard Daylight Savings and Standard Time and other complications.


## 1. Problem
Short description of what we are trying to accomplish.

### Input/s
1. positive or negative integer

### Output/s
1. Formatted time string

### Rules/Requirements
#### Explicit
1. If the number of minutes is positive, the time is after midnight
2. If the number of minutes is negative, the time is before midnight
3. Write a function with a one paramater
4. The function takes a minute-based time format.
5. The function returns the time of day in 24 hour format (hh:mm)
6. The function should work with any integer input
7. You can't use JavaScript's Date class methods.
8. The tests should log true
9. Ignore Daylight Savings and Standard time and other complications

#### Implicit
1. Must calculate minutes to hours to get `hh` portion of result
2. Must calculate hours to minutes
3.

### Edge Cases
- e.g. of edge case: display number from 1 - *n* (Do we include or exclude *n*?)
- When input is 0, return "00:00"

### Constraints

### Clarify questions
1.
2.
3.


### Problem Domain
- Time conversion

#### Definitions
-

#### Formulas
- 1 hour   = 60 minutes
- 1 minute = 60 seconds
- 1 day    = 24 hours
- 24 hours = 1440 minutes

### Mental Model
Given a positive or negative integer. Determine whether the time is before or after midnight. Convert the input to a valid hour and a valid minute. Finally, return a string in the format (hh:mm).



## 2. Examples/Test Cases
0      ----->    "00:00"       00:00 a.m. -> 12:00 a.m.
1      ----->    "00:01"       00:01 a.m. -> 12:10 a.m.
-1     ----->    "23:59"       23:59 p.m.
-3     ----->    "23:57"       23:57 p.m.
35     ----->    "00:35"       00:35 a.m.
-1437  ----->    "00:03"       00:03 a.m.
3000   ----->    "02:00"       02:00 a.m.
800    ----->    "13:20"       13:20 p.m.
-4231  ----->    "01:29"       01:29 a.m.


---
## 3. Data Structure
- string

---
## 4. Algorithm
##### Helper functions
- `calculateHours`
- `calculateMinutes`


#### pseudocode
```js
Given an integer representing a time in minutes

1. Declare a func called `timeOfDay` with a parameter of `minutes`
```
```
input
-4231

Math.abs(4231 / 60)
70.51666666666667


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
- Can we make the code more concise and still readable
- Do we need to change some variable or function names


#### Further Exploration
- What are other solutions people implemented?


