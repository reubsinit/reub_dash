function once(fn) {
  let ran = false;
  return function result() {
    if (!ran) {
      ran = !ran;
      return fn(...arguments);
    }
  };
}

export default once;
