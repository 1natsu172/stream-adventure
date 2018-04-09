const through = require('through2')
const trumpet = require('trumpet')

const tr = trumpet()

const loud = tr.select('.loud').createStream()
loud.pipe(through(function(buf, _, next){
  const upperCasebuf = buf.toString().toUpperCase()
  this.push(upperCasebuf)
  next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)