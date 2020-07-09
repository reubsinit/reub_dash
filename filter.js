function filter(array, cb) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
