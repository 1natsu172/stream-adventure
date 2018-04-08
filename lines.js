const through = require('through2')
const split = require('split')

let count = 0

const tr = through(function(buf, _, next) {
  const line = buf.toString();
  const transformText = `${count % 2 === 0 ? line.toLowerCase() : line.toUpperCase()}\n`
  this.push(transformText)
  count ++
  next()

})

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)