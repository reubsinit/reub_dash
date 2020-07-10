/**
 * Creates a new array with all sub-array elements concatenated into it
 * recursively up to the specified depth.
 * @param {array} array - The array to flatten.
 * @param {number} [depth] - The depth level specifying how deep a
 * nested array structure should be flattened. Defaults to 1.
 * @return {array} A new array with the sub-array elements concatenated into it.
 */
export function flat(array, depth) {
  const result = [];
  let level = 0;
  depth = depth || 1;
  /**
   * Function for flattening an array.
   * @param {array} array - The array to flatten.∂
   */
  function flat(array) {
    for (let i = 0; i < array.length; i++) {
      const val = array[i];
      const isArray = Array.isArray(val);
      if (!isArray || isArray && level == depth) {
        result.push(val);
      } else {
        level++;
        flat(val);
        level--;
      }
    }
  }
  flat(array);
  return result;
}

export default flat;
