function reduceRight(array, cb, initial) {
  let i = initial ? array.length - 1 : array.length - 2;
  // need to explicitly check initial for undefined here
  // because of boolean coercion - when initial is 0 for instance
  let acc = initial == undefined ? array[array.length - 1] : initial;
  while (i > -1) {
    acc = cb(acc, array[i], i, array);
    i--;
  }
  return acc;
}

