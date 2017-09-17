
const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const map = require('through2-map');

const server = http.createServer((req, res) => {

req.pipe(map ((chunk)=> {
    return chunk.toString().toUpperCase();
})).pipe(res);


});

server.listen(port);
