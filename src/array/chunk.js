/**
 * Creates an array of elements split into chunks the length of size. If array
 * can't be chunked evenly, the final chunk will be the remaining elements.
 * @param {array} array - The array to chunk.
 * @param {number} size - The numbers of elements per chunk.
 * @return {array} A new array of chunks.
 */
function chunk(array, size = 1) {
  let i = 0;
  const result = [];

  (function chunkInner() {
    let count = 0;
    const chunk = [];
    while (i < array.length && count++ < size) {
      chunk.push(array[i++]);
    }
    result.push(chunk);
    if (i < array.length) {
      chunkInner();
    }
  })();

  return result;
}


export default chunk;
