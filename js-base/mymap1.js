Array.prototype.map2 = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0,
    res = [];
  while (k < len) {
    if (k in O) {
      res[k] = callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
  return res;
};





let arr  = [1,2,3]
let arr1= arr.map2(it=>it+2)
console.log(arr)