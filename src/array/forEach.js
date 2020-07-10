/**
 * forEach callback.
 *
 * @callback forEachCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Executes a provided function once for each array element.
 * @param {array} array - The array to iterate over.
 * @param {forEachCallback} callback - Function to execute on each element.
 * @return {undefined}
 */
function forEach(array, callback) {
  const initialLength = array.length;
  for (let i = 0; i < initialLength && i < array.length; i++) {
    callback(array[i], i, array);
  }
}
export default forEach;
