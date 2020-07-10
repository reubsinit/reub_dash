/**
 * Filter callback.
 *
 * @callback filterCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Creates a new array with all elements that pass the test implemented by the
 * provided function.
 * @param {array} array - The array to iterate over.
 * @param {filterCallback} callback - Function is a predicate, to test each
 * element of the array. Return true to keep the element, false otherwise.
 * @return {array} A new array with the elements that pass the test. If no
 * elements pass the test, an empty array will be returned.
 */
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

export default filter;
