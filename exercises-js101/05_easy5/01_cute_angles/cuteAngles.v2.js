// Author: Dominic Parker

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function clarifyFloatingPointNumber(floatingPointNum) {
  if (floatingPointNum > 360) {
    return floatingPointNum % 360;
  } else if (floatingPointNum < 0) {
    while (floatingPointNum < 0) {
      floatingPointNum += 360;
    }
    return floatingPointNum;
  } else return floatingPointNum;
}

function dms(floatingPointNum) {
  let clarifiedFPN = clarifyFloatingPointNumber(floatingPointNum);
  let degrees = Math.floor(clarifiedFPN);
  let minutesRaw = (clarifiedFPN - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minutesRaw);
  let seconds = Math.floor((minutesRaw - minutes) * SECONDS_PER_MINUTE);
  minutes.toString().length === 1 ? minutes = "0" + minutes.toString() : minutes.toString();
  seconds.toString().length === 1 ? seconds = "0" + seconds.toString() : seconds.toString();
  degrees = degrees.toString();
  return `${degrees}°${minutes}'${seconds}"`;
}