const axios = require('axios')
// configure enviromental variables
require('dotenv').config()

const OMDB_API_KEY = process.env.OMDB_API_KEY

console.log(OMDB_API_KEY)

axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=star+wars`)
.then(results => {
  console.log(results.data)
})
.catch(error => console.log(error))

async function hitOmdb() {
  try {
    const results = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=star+wars`)
    console.log(results.data)
  } catch (error) {
    console.log(error)
  }
}

hitOmdb()