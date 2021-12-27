const arr = [1,2,[3,4],[[2,3]]]

console.log(arr.flat(Infinity))

const arr1 = [1,2,3,4,5,[23,[1]]]

const flatten = arr => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

console.log(flatten(arr1))