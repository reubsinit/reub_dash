import forEachReturn from '../../src/array/forEachReturn';

/**
 * findIndex callback.
 *
 * @callback findIndexCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Returns the value of the first element in the provided array that satisfies
 * the provided testing function.
 * @param {array} array - The array to iterate over.
 * @param {findIndexCallback} callback - A function to execute on each value
 * in the array until the function returns true, indicating that the
 * satisfying element was found.
 * @return {number} The index of the first element in the array that passes
 * the test. Otherwise, -1.
 */
function findIndex(array, callback) {
  /* eslint-disable-next-line require-jsdoc */
  function each(ele, idx, array) {
    if (callback(ele, idx, array)) {
      return idx;
    }
  }
  return forEachReturn(array, each) ?? -1;
}

export default findIndex;
