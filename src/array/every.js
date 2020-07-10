import forEachReturn from '../../src/array/forEachReturn';
/**
 * every callback.
 *
 * @callback everyCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Tests whether all elements in the array pass the test implemented by the
 * provided function. It returns a Boolean value.
 * @param {array} array - The array to iterate over.
 * @param {everyCallback} callback - A function to test each element.
 * @return {boolean} `true` if the callback function returns a truthy value
 *  for every array element. Otherwise, `false`.
 */
function every(array, callback) {
  /* eslint-disable-next-line require-jsdoc */
  function each(ele, idx, array) {
    if (!callback(ele, idx, array)) {
      return false;
    }
  }
  return forEachReturn(array, each) ?? true;
}

export default every;
