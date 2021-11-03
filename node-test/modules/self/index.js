const _ = require('lodash')


const arr = [1,2,3]


const myChunk = (arr)=>{
  const arr2 = _.chunk(arr)
  return arr2
}

module.exports = myChunk