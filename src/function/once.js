function once(fn) {
  let ran = false;
  return function result() {
    if (!ran) {
      fn();
      ran = !ran;
    }
  }
}
