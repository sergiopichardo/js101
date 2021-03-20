# Cute Angles
Write a function that takes a floating point number representing
an angle between 0 and 360 degrees, and returns a string
representing that angle in degrees, minutes, and seconds.

You should use a degree symbol (˚) to represent degrees, a single
quote (') to represent minutes, and a double quote (") to represent
seconds. There are 60 minutes in a degree, and 60 seconds in a minute.



## 1. Problem
Convert an angle represented as a floating-point number to degrees,
minutes and seconds

### Input/s
1. `angle`: a floating point number representing an angle between 0 and 360 degrees

### Output/s
1. `resultString`: a string representing the input `angle` in degrees, minutes and seconds.

### Rules/Requirements
#### Conversion Rules
- There are 60 minutes in a degree
- There are 60 seconds in a minute


#### Explicit Requirements
1. Write a function called `dms()`
2. The function must accept a floating point number (angle)
3. The function returns a string representing that angle in deg, min, and secs.
4. Use the symbol (˚) to represent degrees.
5. Use the symbol (') to represent minutes.
6. Use the symbol ('') to represent seconds.

#### Implicit Requirements
1. convert angle (float) to minutes
2. convert minutes to seconds


### Edge Cases
- If input is 0 (zero), return 360°00'00"
- If input is 360, return 360°00'00" or 0°00'00"

### Constraints
- 0°
- 360°

### Clarify questions
1. Can values be greater than 360 degrees?
   - Assume all input will be between 0 and 360 degrees
   - Assume you will not receive negative values


### Problem Domain
- Trigonometry
- Conversions involving degrees, minutes, and seconds.


### Mental Model
Given a positive floating point number, convert it into minutes
and seconds, and return a string representation of that angle.


## 2. Examples/Test Cases
30        ------> 30°00'00"
76.73     ------> 76°43'48"
254.6     ------> 254°35'59"
93.034773 ------> 93°02'05"
0         ------> 0°00'00"
360       ------> 360°00'00" or 0°00'00"


---
## 3. Data Structure
- Create a return variable to return the result string.

---
## 4. Algorithm


#### pseudocode
```js
1. Declare a function that takes a floating-point number as an argument
2. If the angle is equal to 0, return the given string representation for 0 degrees.
3. If the angle is equal to 360, return the given string representation for 360 degrees.
4. Call a function to convert the input (`angle`) to minutes and store the result in a variable.
5. Call a function to convert the output (`minutes`) to seconds and store the result in a variable.
6. Construct a string representation of angles, minutes and seconds
7. Return the result string.

```


#### Formal pseudocode
```js

FUNCTION dms(angle)
  IF angle === 0
    RETURN `0°00'00"`
  ENDIF

  IF angle === 360
    RETURN `360°00'00"`
  ENDIF

  SET minutes = SUBPROCESS "Convert angle into minutes"
  SET seconds = SUBPROCESS "Convert minutes into seconds"

  SET resultString = degrees + `°` + minutes + `'` + seconds + `"`

  RETURN resultString

ENDFUNCTION

---
## 5. Code
- Implement the algorithm with code