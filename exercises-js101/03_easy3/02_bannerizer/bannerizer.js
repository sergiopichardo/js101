/*
Bannerizer

Write a function that will take a short line of text,
and write it to the console log within a box.
*/

/**
 * @param {string} text
 * @return {string}
 */
function logInBox(text) {
  let lines = '-'.repeat(text.length);
  let space = ' '.repeat(text.length);

  return `
+-${lines}-+
| ${space} |
| ${text} |
| ${space} |
+-${lines}-+`;
}


console.log(logInBox('To boldly go where no one has gone before.'));
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

console.log(logInBox(''));
/*
+--+
|  |
|  |
|  |
+--+
*/