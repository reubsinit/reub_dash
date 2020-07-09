function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
