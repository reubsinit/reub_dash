function chunk(array, size = 1) {
  let i = 0;
  const result = [];

  (function chunk() {
    let count = 0;
    const chunk = [];
    while (i < array.length && count++ < size) {
      chunk.push(array[i++]);
    }
    result.push(chunk);
    if (i < array.length) {
      chunk();
    }
  })();

  return result;
}

export default chunk;
