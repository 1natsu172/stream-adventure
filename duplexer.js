const spawn = require('child_process').spawn
const duplexer = require('duplexer2')

module.exports = (cmd, args)=>{
  const processes = spawn(cmd, args)
  return duplexer(processes.stdin, processes.stdout)
}