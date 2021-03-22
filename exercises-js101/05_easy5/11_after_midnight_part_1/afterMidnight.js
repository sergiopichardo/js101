/**
 *
 * @param {number} minutes
 * @return {string}
 */
function timeOfDay(minutes) {

}



console.log(timeOfDay(0) === "00:00");    // 00:00 a.m. -> 12:00 a.m.
console.log(timeOfDay(1) === "00:01");    // 00:01 a.m. -> 12:10 a.m.
console.log(timeOfDay(-1) === "23:59");   // 23:57 p.m.
console.log(timeOfDay(-3) === "23:57");   // 23:57 p.m.

console.log(timeOfDay(35) === "00:35");   // 00:35 a.m.
console.log(timeOfDay(-1437) === "00:03");// 00:03 a.m.
console.log(timeOfDay(3000) === "02:00"); // 02:00 a.m.
console.log(timeOfDay(800) === "13:20");  // 13:20 p.m.
console.log(timeOfDay(-4231) === "01:29");// 01:29 a.m.

https://meet.google.com/ses-hber-nhj