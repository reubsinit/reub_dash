import forEachReturn from '../../src/array/forEachReturn';

/**
 * find callback.
 *
 * @callback findCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Returns the value of the first element in the provided array that satisfies
 * the provided testing function..
 * @param {array} array - The array to iterate over.
 * @param {findCallback} callback - Function to execute on each value in the
 * array.
 * @return {any} The value of the first element in the array that satisfies
 * the provided testing function. Otherwise, undefined is returned.
 */
function find(array, callback) {
  /* eslint-disable-next-line require-jsdoc */
  function each(ele, idx, array) {
    if (callback(ele, idx, array)) {
      return ele;
    }
  }
  return forEachReturn(array, each);
}

export default find;
