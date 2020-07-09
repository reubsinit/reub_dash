function reduce(array, cb, initial) {
  let i = initial ? 0 : 1;
  // need to explicitly check initial for undefined here
  // because of boolean coercion - when initial is 0 for instance
  let acc = initial == undefined ? array[0] : initial;
  while (i < array.length) {
    acc = cb(acc, array[i], i, array);
    i++;
  }
  return acc;
}

