import _for from './_for';

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
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

export default find;
