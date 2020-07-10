/**
 * map callback.
 *
 * @callback mapEachCallback
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Creates a new array populated with the results of calling a provided
 * function on every element in the calling array.
 * @param {array} array - The array to iterate over.
 * @param {mapEachCallback} callback - Function that is called for every
 * element of arr. Each time callback executes, the returned value is added to
 * new_array.
 * @return {array} A new array with each element being the result of the
 * callback function.
 */
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

export default map;
