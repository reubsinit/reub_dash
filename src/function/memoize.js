function memoize(fn) {
  const cache = new Map();
  memoize.cache = cache;
  return function result() {
    const key = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      return cache.set(key, fn(...arguments)).get(key);
    }
  };
}

export default memoize;
