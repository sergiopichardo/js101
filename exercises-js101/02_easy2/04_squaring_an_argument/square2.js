// Author: William Baker

let multiply = (num1, num2) => num1 * num2;

let power = function(num, exp) {
  return Array(exp).fill(num).reduce(multiply);
};

