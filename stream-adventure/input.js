const through = require('through2');
const stream = through(write, end);

//process.stdin.pipe(process.stdout);

function write(buffer, encoding, next) {
  buffer = buffer.toString().toUpperCase();
  this.push(buffer);
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
