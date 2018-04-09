const ws = require('websocket-stream')
const stream = ws('ws://localhost:8099')

const m = 'hello\n'

stream.write(m)