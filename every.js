function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (!cb(array[i], i, array)) return false;
  }
  return true;
}
