const db = require('./db.json')
const express = require('express')
const app = express()
const port = 3001


function index(req, res) {
  res.send(JSON.stringify(db))
}


function random(req, res) {
  let n = req.params.n
  let list = []
  for(let i=0; i<n; i++) {
    let r = Math.floor(Math.random()*db.length)
    list.push(db[i])
  }
  res.send(list)
}

const cors = require('cors')

app.use(cors()) // Use this after the variable declaration


app.get('/', index)
app.get('/random/:n', random)
app.listen(port, () => console.log(`Beer server running on port ${port}!`))
