const async = require('async');
const http = require('http');

/*
function fetchData(url, done) {
let str = '';
http.get(url, (response) => {

response.on("data", (chunk) => str += chunk.toString());

response.on("end", () => {
  console.log(str);
   return done(null, str);
  });

  response.on("error", (err) => console.log(err));
});

}
*/


async.each([process.argv[2], process.argv[3]], function(url, done){
  let str = '';
  http.get(url, (response) => {

  response.on("data", (chunk) => str += chunk.toString());

  response.on("end", () => {
     return done(null, str);
    });

  response.on("error", (err) => done(err))
  });

  }, function(err, results) {
  if (err) console.log(err);
  console.log(results);
});
