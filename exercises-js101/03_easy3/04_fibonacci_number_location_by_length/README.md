# Fibonacci Number Location by Length
The Fibonacci series is a series of numbers `(1, 1, 2, 3, 5, 8, 13, 21, ...)` such that the first two numbers are `1` by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is `354,224,848,179,261,915,075`—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument.
(The first Fibonacci number has an index of `1`.) You may assume that the argument is always an integer greater than or equal to  `2`.

---

JavaScript's normal Number type can represent integers accurate up to the value
of `Number.MAX_SAFE_INTEGER`, which is the 16-digit value `9007199254740991`.
Any integer larger than that value loses accuracy.
For instance, the following code outputs `1`, not `2` as you may expect:

```js
console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);
```

We'll be working with much larger numbers in this problem. Fortunately, JavaScript
now supports a `BigInt` type that lets you work with massive integers, limited only
by the amount of memory available to your program, and the time you can devote to
waiting for an answer.

To use BigInt integers in your solution, simply append the letter `n` to any
numbers you use in your solution: `1n`, `1234567890123456789012345678901234567890n`,
and so on. JavaScript will take care of the rest.




## 1. Problem
Short description of what we are trying to accomplish.

### Input/s
1. integer (fibonacci number `length`)

### Output/s
1. integer (`index` of first fibonacci number with specified length from input)

### Rules/Requirements
#### Explicit
1. Create a function with a single parameter
2. The function accepts an integer that represents a fibonacci number `length`.
3. The function returns the `index` of the first fibonacci number of that `length`.
3. The first number in a fibbonacci series is `1`
4. The second number in a fibbonacci series is `1`
5. The formula `Fn = Fn-1 + Fn-2`
6. The input will always be greater than or equal to `2`

#### Implicit
1. The input must be a `bigint`
2. The return value must be of type `bigint`
3. The formula `Fn = Fn-1 + Fn-2` is true when `n >= 2`


### Clarify questions
1.
2.
3.


### Problem Domain
- Fibonacci Numbers
- JavaScript BigInt (Big Numbers)

#### `Fibonacci Series`:
The Fibonacci series is a series of numbers `(1, 1, 2, 3, 5, 8, 13, 21, ...)` such that the first two numbers are `1` by definition, and each subsequent number is the sum of the two previous numbers

#### Fibonacci Numbers Formula
```sh
When n >= 3
F0 = 0
F1 = 1
Fn = Fn-1 + Fn-2
```
#### BigInt
- A `BigInt` is a special numeric type that provides support for integers of arbitrary length.
- You can create a bigint in two ways:
  1. By appending `n` to the end of an integer.
  2. By calling the function `BigInt` which creates bigints from strings, and numbers, etc.
- Math Operators
  - Returns the result rounded towards zero, without the decimal part
    - e.g. `(5n / 2n)`
  - You can't mix bigint with regular numbers
    - e.g. `(1n + 2) // Error: Cannot mix BigInt and other types`
  - You need to explicitely convert them.
    ```js
    let bigint = 1n;
    let number = 2;
    console.log(bigint + BigInt(number));
    ```
  - The unary operator is not supported on bigints
    ```js
    let bigint = 1n;
    console.log(+bigint);
    ```
  - You need to use the `Number()` function to convert a bigint into a number.
    ```js
    let bigint = 1n;
    let number = Number(bigInt);
    ```


#### Resources
- [Visualize Fibbonacci Sequence](https://www.wikihow.com/Calculate-the-Fibonacci-Sequence)
- [Fibonacci Number](https://en.wikipedia.org/wiki/Fibonacci_number)
- [Sum of Fibonacci](https://www.youtube.com/watch?v=VKc7qUdurMk&ab_channel=DrPeyam)
- [Fibonacci Calculator](https://www.omnicalculator.com/math/fibonacci)


## 2. Examples
**Finding the 3rd fibonacci number**
- **`Fn = Fn-1 + Fn-2`**
1. `F3 = F(3-1) + F(3-2) = F2 + F1`
2. `F2 = F(2-1) + F(2-2) = F1 + F0`
3. `F1 = 1`
4. `F0 = 0`
5. `F2 = F1 + F0 = 1 + 0 = 1`
6. `F3 = F2 + F1 = 1 + 1 = 2`
7. `F3 = 2`

#### Test Cases
```js
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
```


**Case 1**
```
input: 2n (length)
output: 7n (index) -->  1 1 2 3 5 8 [13]
```
---
**Case 2**:
```
input: 3n (length)
output: 12n (index) -->  1 1 2 3 5 8 13 21 34 55 89 [144]
```

### Mental Model
Calculate a fibonacci number. Then count the number of digits of the current fibonacci number. Keep count of the index, when you find a  fibonacci number with the same number of digits as the size of number input, return the index of the number.


---
## 3. Data Structure
- An array

---
## 4. Algorithm
#### pseudocode
```js
1. create a func called `findFibonacciIndexByLength` with a parameter called `fibLength`.
2. Create a variable called `index` and set it to 0 (bigint)
3. Create a variable called `prev1` and set it to 1 (bigint)
4. Create a variable called `prev2` and set it to 0 (bigint)
5. Create a variable called `fibNumber` and set it to 0 (bigint)
6. Create a variable called `fibDigitCount` and set it the count of digits of `fibNumber`
7. While the length of the `fibNumber` is not equal to `fibLength`
      (a) Set `fibNumber` to sum of `prev1` and `prev2` (convert prev1 and prev2 to bigint )
      (b) Set `prev1` to `prev2`
      (c) Set `prev2` to `fibNumber`
      (d) increment the `index` variable by 1
8.  Return the index converted to a BigInt
```

#### Formal pseudocode
```js
FUNCTION findFibonacciIndexByLength(fibLength)
  SET index = 1
  SET prev1 = 1
  SET prev2 = 0
  SET fibNumber = 0
  SET fibDigitCount = SUBPROCESS "convert to string and get length of string"

  WHILE `fibDigitCount` is NOT equal to `fibLength`
    fibNumber = prev1 + prev2
    prev1 = prev2
    prev2 = fibNumber
    index = index + 1
  ENDWHILE

  RETURN index
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


