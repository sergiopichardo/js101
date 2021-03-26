const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

/**
 * @param {number} rawMinutes
 * @return {string}
 * @example -1437   -->   00:03 a.m.
 * @example 3000   -->    02:00 a.m.
 */
function timeOfDay(rawMinutes) {
  if (rawMinutes < 0) {
    // convert to positive time
    rawMinutes = (rawMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY
    // time is already positive
  } else {
    rawMinutes = rawMinutes % MINUTES_PER_DAY
  }

  let hours = Math.floor(rawMinutes / MINUTES_PER_HOUR);
  let minutes = rawMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

function leadingZero(timeInteger) {
  return timeInteger < 10 ? `0${timeInteger}` : String(timeInteger)
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}


console.log(timeOfDay(0) === "00:00");    // 00:00 a.m. -> 12:00 a.m.
console.log(timeOfDay(1) === "00:01");    // 00:01 a.m. -> 12:10 a.m.
console.log(timeOfDay(-1) === "23:59");   // 23:57 p.m.
console.log(timeOfDay(-3) === "23:57");   // 23:57 p.m.
console.log(timeOfDay(35) === "00:35");   // 00:35 a.m.
console.log(timeOfDay(-1437) === "00:03");// 00:03 a.m. **
console.log(timeOfDay(3000) === "02:00"); // 02:00 a.m.
console.log(timeOfDay(-4231) === "01:29");// 01:29 a.m. **

/*
DISCUSSION
We start out this solution by defining a few useful constants so we don't have a bunch of "magic numbers" in our method. Also, we have defined a helper function formatTime that will help us with proper formatting. The body of the method then boils down to 3 operations:

Ensure the time difference is in the range between 0 and MINUTES_PER_DAY by using the % operator. For negative numbers we need to add MINUTES_PER_DAY to the remainder.

We calculate the hours and minutes.

Format the results with our helpers formatTime() and leadingZero(). leadingZero ensures that we always have at least 2 digits when our numbers are represented as strings.

Return the formatted string.


FURTHER EXPLORATION
How would you approach this problem if you were allowed to use JavaScript's Date class? Suppose you also needed to consider the day of week? (Assume that deltaMinutes is the number of minutes before or after midnight between Saturday and Sunday; in such a method, a deltaMinutes value of -4231 would need to produce a return value of Thursday 01:29.)
*/
