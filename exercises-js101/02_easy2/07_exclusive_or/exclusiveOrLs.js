/*

*/
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

/*
Further Exploration
Can you think of a situation in which a boolean xor function would be useful? Suppose you were modeling a light at the top of a flight of stairs wired in such a way that the light can be turned on or off using either the switch at the bottom of the stairs or the switch at the top of the stairs. This is an xor configuration, and it can be modeled in JavaScript using the xor function. Think of some additional examples.

|| and && are so-called short circuit operators in that the second operand is not evaluated if its value is not needed. Does the xor function perform short-circuit evaluation of its operands? Why or why not? Does short-circuit evaluation in xor operations even make sense?
*/


// Other solutions
function xor(a, b) {
  return !!a !== !!b;
}

function xor(a, b) {
  return !a !== !b
}

function xor(a, b) {
  return (Boolean(a) !== Boolean(b));
}
