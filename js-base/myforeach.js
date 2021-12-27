Array.prototype.forEach2 = function(callback, thisArg) {
  if (this == null) {
      throw new TypeError('this is null or not defined')
  }
  if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function')
  }

  const len = this.length >>> 0  
  let k = 0
  while (k < len) {
      if (k in this) {
          callback.call(thisArg, this[k], k, this);
      }
      k++;
  }
}

const arr  = [1,2,3]
let arrs = arr.forEach2((it,index,arr)=>{
  it*2
})
console.log(arrs)


