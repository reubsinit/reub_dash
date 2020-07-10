/**
 * some callback.
 *
 * @callback someCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Tests whether at least one element in the array passes the test implemented
 * by the provided function. It returns a Boolean value.
 * @param {array} array - The array to iterate over.
 * @param {someCallback} callback - Function to execute on each value
 * in the array.
 * @return {boolean} `true` if the callback function returns a truthy
 * value for at least one element in the array. Otherwise, `false`.
 */
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

export default some;
