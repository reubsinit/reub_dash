/**
 * reduce callback.
 *
 * @callback reduceRightCallback
 * @param {any} accumulator - The accumulator accumulates callback's return
 * values. It is the accumulated value previously returned in the last
 * invocation of the callback—or `initial`, if it was supplied (see below).
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Applies a function against an accumulator and each value of the array
 * (from right-to-left) to reduce it to a single value.
 * @param {array} array - The array to iterate over.
 * @param {reduceRightCallback} callback - Function to execute on each value
 * in the array.
 * @param {any} initial - Value to use as `accumulator` to the first call of
 * the `callback`. If no initial value is supplied, the last element in the
 * array will be used and skipped.
 * @return {any} The single value that results from the reduction.
 */
function reduceRight(array, callback, initial) {
  let i = initial ? array.length - 1 : array.length - 2;
  // need to explicitly check initial for undefined here
  // because of boolean coercion - when initial is 0 for instance
  let acc = initial == undefined ? array[array.length - 1] : initial;
  while (i > -1) {
    acc = callback(acc, array[i], i, array);
    i--;
  }
  return acc;
}

export default reduceRight;
