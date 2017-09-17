const port = process.argv[2];
const net = require('net');
//console.log(port);


//console.log(year, month, day);


var server = net.createServer((socket) => {

const date = new Date();

let year = date.getFullYear(),
month = date.getMonth() + 1,
day = date.getDate(),
hours = date.getHours(),
mins = date.getMinutes();

let formattedDate = `${year}-0${month}-${day} ${hours}:${mins}\n`;
socket.write(formattedDate)
socket.end();
})

server.listen(port);
