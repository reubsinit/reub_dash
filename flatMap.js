function flatMap(array, cb) {
  let result = flat(map(array, cb));
}
