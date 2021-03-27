
const stringify = integer => {
  return Array.from({ length: integer }, (_, idx) => idx)
              .reduce((accum, value, _) =>  value % 2 === 0 ? accum + 1 : accum + 0, "")
}

console.log(stringify(6))