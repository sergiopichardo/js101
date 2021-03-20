// Cute Angles (Easy 5, No. 1)

const SYMBOLS = {
  deg: `°`,
  min: `'`,
  sec: `"`,
}

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

/**
 * Converts an angle into a string represented with degrees, minutes
 * and seconds
 * @param {number} angle - A floating point-num b/w 0˚ and 360˚.
 * @returns {string} - That angle in degrees, minutes, and seconds.
 * @example 30 ---> 30°00'00"
 */
function dms(angle) {
  if (angle === 0) return formatResultString(0)
  if (angle === 360) return formatResultString(360)

  let [degrees, degreesRemainder] = getDegreeValues(angle)
  let [minutes, minutesRemainder] = convertDegreesToMinutes(degreesRemainder)
  let [seconds, ] = convertMinutesToSeconds(minutesRemainder)

  return formatResultString(degrees, minutes, seconds);
}


/**
 * Convert an angle in degrees to minutes
 * @param {number} degrees
 * @return {number} - minutes
 */
 function getDegreeValues(angle)  {
  let degrees = Math.floor(angle)
  // 0 % 0 = NaN, use || 0 to make sure the value is 0 and not NaN
  let degreesRemainder = (angle % degrees) || 0
  return [degrees, degreesRemainder]
}


/**
 * Convert an angle in degrees to minutes
 * @param {number} degrees
 * @return {number} - minutes
 */
function convertDegreesToMinutes(degreesRemainder) {
  let minutesWithDecimal = degreesRemainder * MINUTES_PER_DEGREE
  let minutes = Math.floor(minutesWithDecimal)
  // 0 % 0 = NaN, use || 0 to make sure the value is 0 and not NaN
  let minutesRemainder = (minutesWithDecimal % minutes) || 0
  return [minutes, minutesRemainder]
}


/**
 * Convert minutes to seconds
 * @param {number} minutes
 * @return {number} - seconds
 */
function convertMinutesToSeconds(minutes) {
  let secondsWithDecimal = minutes * SECONDS_PER_MINUTE
  let seconds = Math.floor(secondsWithDecimal)
  // 0 % 0 = NaN, use || 0 to make sure the value is 0 and not NaN
  let secondsRemainder = ((secondsWithDecimal) % seconds) || 0
  return [seconds, secondsRemainder]
}



/**
 * Format output string
 * @param {number} degrees
 * @param {number} minutes
 * @param {number} seconds
 * @return {string} - formatted output string
 */
function formatResultString(degrees, minutes = 0, seconds = 0) {
  let [min, sec] = [minutes, seconds].map((value) => {
    return (value < 10 ) ? `0${value}` : value;
  })

  return `${degrees}${SYMBOLS.deg}${min}${SYMBOLS.min}${sec}${SYMBOLS.sec}`
}


 console.log(dms(30));           // 30°00'00"
 console.log(dms(76.73));        // 76°43'48"
 console.log(dms(254.6));        // 254°35'59"
 console.log(dms(93.034773));    // 93°02'05"
 console.log(dms(0));            // 0°00'00"
 console.log(dms(360));          // 360°00'00" or 0°00'00"