function forEachReturn(array, callback) {
  let result = undefined;
  const initialLength = array.length;
  for (let i = 0; i < initialLength && i < array.length; i++) {
    result = callback(array[i], i, array);
    if (result != undefined) return result;
  }
  return result;
}

export default forEachReturn;
