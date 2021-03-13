function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}
/*
Discussion
As usual, this isn't the shortest or even the easiest solution to this problem, but it's straightforward. The big takeaway from this solution is our use of the DIGITS object to convert string digits to their numeric values. This technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.

Keep in mind that the keys of an object are always strings. Thus, on line 3, the 0 to the left of the colon (:) is a string even thought it doesn't look like a string. The 0 to the right is a number. That's a convenient relationship in this problem since we'll use digits stored as strings to look up the corresponding numeric values.

The actual computation of the numeric value of string is mechanical. We take each digit and add it to 10 times the previous value, which yields the desired result in almost no time. For example, if we have 4, 3, and 1, we compute the result as:

10 * 0 + 4 -> 4
10 * 4 + 3 -> 43
10 * 43 + 1 -> 431

*/