/**
 * FlatMap callback.
 *
 * @callback flatMapCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * First maps each element using a mapping function, then flattens the result
 * into a new array. It is identical to a map() followed by a flat() of
 * depth 1, but flatMap() is often quite useful, as merging both into one
 * method is slightly more efficient.
 * @param {array} array - The array to iterate over.
 * @param {flatMapCallback} callback - Function that produces an element
 * of the new Array.
 * @return {array} A new array with each element being the result of the
 * callback function and flattened to a depth of 1.
 * the test. Otherwise, -1.
 */
function flatMap(array, callback) {
  return flat(map(array, callback));
}

export default flatMap;
