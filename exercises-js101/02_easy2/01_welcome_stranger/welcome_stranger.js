/*
Create a function that takes 2 arguments, an array and an object.
The array will contain 2 or more elements that, when combined
with adjoining spaces, will produce a person's name.

The object will contain two keys, "title" and "occupation",
and the appropriate values.

Your function should return a greeting that uses the person's
full name, and mentions the person's title.
*/

/**
 *
 * @param {string[]} fullName
 * @param {{title: string, occupation: string}} credentials
 * @return {string} - greeting
 */
function greetings(fullName, { title, occupation }) {
  return `Hello, ${fullName.join(" ")}! Nice to have a ${title} ${occupation} around.`
}



const dwight = {
  fullName: ["Dwight", "K", "Schrute"],
  information: { title: "Master", occupation: "Assistant to the Regional Manager" }
}

const michael = {
  fullName: ["Michel", "G", "Scott"],
  information: { title: "Master", occupation: "Regional Manager" }
}

const robert = {
  fullName: ["Robert", "California"],
  information: { title: "Master", occupation: "CEO" }
}


console.log(greetings(dwight.fullName, dwight.information)) // "Hello, Dwight K Schrute! Nice to have a Master Assistant to the Regional Manager around."
console.log(greetings(michael.fullName, michael.information)) // "Hello, Michael G Scott! Master Nice to have a Master Regional Manager around."
console.log(greetings(robert.fullName, robert.information)) // "Hello, Robert California! Master  Nice to a have Master CEO around."

