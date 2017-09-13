var fs = require('fs');

var buffer = fs.readFile(process.argv[2], (err, data) => {
//  console.log(data.toString());

  let arr = data.toString().match(/\n/g);

  console.log(arr.length)
});
//console.log(buffer);

//var match = buffer.match(/(\n)/g);
//console.log(match.length);
/*
for (let i = 0, len = read.length; i < len; i++){
  console.log(read[i]);
}*/
