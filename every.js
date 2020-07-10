/**
 * Every callback.
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
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

export default every;
