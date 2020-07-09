function flatMap(array, cb) {
  return flat(map(array, cb));
}
