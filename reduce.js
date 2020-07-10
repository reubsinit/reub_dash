/**
 * reduce callback.
 *
 * @callback reduceCallback
 * @param {any} accumulator - The accumulator accumulates callback's return
 * values. It is the accumulated value previously returned in the last
 * invocation of the callback—or `initial`, if it was supplied (see below).
 * @param {any} element - The current element being processed in the array.
 * @param {number} [idx] - The index of the current element.
 * @param {array} [array] - The array being iterated on.
 */

/**
 * Executes a reducer function (that you provide) on each element of the array,
 * resulting in single output value.
 * @param {array} array - The array to iterate over.
 * @param {reduceCallback} callback - A function to execute on each element in
 * the array (except for the first, if no `initial` is supplied).
 * @param {any} initial - A value to use as the first argument to the first call
 * of the callback. If no `initial` is supplied, the first element in the
 * array will be used as the `initial` `accumulator` value and skipped as
 * `currentValue`.
 * @return {any} The single value that results from the reduction.
 */
function reduce(array, callback, initial) {
  let i = initial ? 0 : 1;
  // need to explicitly check initial for undefined here
  // because of boolean coercion - when initial is 0 for instance
  let acc = initial == undefined ? array[0] : initial;
  while (i < array.length) {
    acc = callback(acc, array[i], i, array);
    i++;
  }
  return acc;
}

export default reduce;

