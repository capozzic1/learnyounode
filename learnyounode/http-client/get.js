const http = require('http');

const url = process.argv[2];
http.get(url, (response) => {
  let arr = [];
  response.setEncoding('utf8');
  response.on("data", (data) => {
    arr.push(data);
  });
  response.on("end", (data) => {

    let str = arr.join("");
    let len = str.length;
    console.log(`${len}\n${str}`);
  })
})
