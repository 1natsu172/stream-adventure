const concat = require('concat-stream')
const http = require('http')

process.stdin.pipe(concat(content=>{
  content =  content.toString().split('').reverse().join('')
  console.log(content);
}))
