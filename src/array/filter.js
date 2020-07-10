import forEach from '../../src/array/forEach';
/**
 * filter callback.
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
  forEach(array, function each(ele, idx, array) {
    if (callback(ele, idx, array)) {
      result.push(ele);
    }
  });
  return result;
}

export default filter;
