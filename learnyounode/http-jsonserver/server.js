

const http = require('http');
const port = process.argv[2];
const url = require('url');

const server = http.createServer((req, res) => {
var obj  = url.parse(req.url, true);
var testStr = obj.query.iso;
var patt = new RegExp(/\d+/i)
var date = patt.exec(testStr);
console.log(typeof date);
});

server.listen(port, (req, res) => {

  console.log(`Listening on port ${port}`);
});
