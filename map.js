function map(array, cb) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(cb(array[i], i, array));
  }
  return result;
}
