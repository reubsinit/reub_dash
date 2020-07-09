function flat(array, depth) {
  const result = [];
  let level = 0;
  depth = depth || 1;
  function flat(array) {
    for (let i = 0; i < array.length; i++) {
      const val = array[i];
      const isArray = Array.isArray(val);
      if (isArray && level == depth || !isArray) {
        result.push(val);
      } else {
        level++
        flat(val);
        level--;
      }
    }
  }
  flat(array);
  return result;
}
