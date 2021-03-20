

/**
 * Return an array containing the union of its elements
 * @param  {...Array.<number|string|boolean|null|undefined>} sets
 * @returns {Array.<number|string|boolean|null|undefined>}
 */
function union(...sets) {
  return Array.from(new Set(sets.flat(Infinity)));
}

console.log(union([1, 2, 3], [3, 2, 4], [[[[[[ 'a', 'b']]], 'c']]]));