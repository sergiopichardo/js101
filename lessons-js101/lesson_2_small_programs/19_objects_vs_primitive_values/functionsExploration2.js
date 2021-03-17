// Today I learned that you can add properties to function definitions and
// function expressions because they’re just an object.

// This only works with function definitions and function expressions
// because arrow functions do not have their own `this` keyword.

let greet = new Function()

greet.custom = function() {
  return `Hi, ${name}!`;
}

greet.default = 'Hi!'

greet.extend = function(properties) {
  for (prop in properties) {
    this[prop] = properties[prop]
  }
  return this;
}

greet.extend({
  firstName: 'Sergio',
  job: 'DevOps Engineer in Training'
})

console.log(greet('Fulano'));
console.log(greet.default);
console.log(greet.firstName) // Sergio
console.log(greet.job)  // DevOps Engineer in Training