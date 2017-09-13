const http = require('http');
const fs = require('fs');
const file = process.argv[2];
const async = require('async');

async.waterfall([
(done) => {
  fs.readFile(file, (err, data) => {
    if (err) console.log(err);

    done(null, data.toString());
  })
},
(url, done) => {
  http.get(url, (response) => {
 let str = '';
  response.on("data", (data) => str += data.toString());
  response.on("end", () =>  done(null, str))

  })
}
],
(err, result) => {
if (err) console.log(err);
 console.log(result);
}

)






/*

Promise solution

new Promise((resolve, reject) => {
fs.readFile(file, (err, data) => {
  if (err) reject(err);

  resolve(data.toString());
})

}).then((url) => {
  //console.log(url);
  http.get(url, (response) => {
  response.on("data", (data) => console.log(data.toString()));
  })
})
*/
