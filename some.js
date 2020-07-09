function some(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return true;
    }
  }
  return false;
}
