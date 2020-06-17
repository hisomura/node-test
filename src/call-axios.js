const axios = require('axios')
const result = axios.get('https://google.com')
console.log('axios loaded')
result.then((result) => {
  console.dir(result)
})
