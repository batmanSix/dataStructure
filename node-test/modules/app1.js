const axios = require('axios')

axios.get('http://www.baidu.com').then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(res)
})