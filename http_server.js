const http = require('http')
const fs = require('fs')
const through = require('through2')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req
      .pipe(
        through(function(buf, _, next) {
          this.push(buf.toString().toUpperCase())
          next()
        })
      )
      .pipe(res)
  } else {
    res.end('please send POST')
  }
})
server.listen(process.argv[2])
