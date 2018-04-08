const through = require('through2')
const stream = through(write, end)

function write (buffer, encoding, next) {
  const toUpperCase = buffer.toString().toUpperCase()

  this.push(toUpperCase);
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);