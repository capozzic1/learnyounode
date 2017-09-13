const async = require('async');
const http = require('http');

//getData(process.argv[2], process.argv[3])

function getData(url, done) {
  http.get(url, (response) => {
    let str = '';
    response.on("data", (data) => str += data.toString());

    response.on("end", () => {

      done(null, str)
    })

    response.on("error", (err) => done(err))
  })
}


async.series({
  requestOne: (done) => {
    getData(process.argv[2], done);
  },
  requestTwo: (done) => {
    getData(process.argv[3], done);
  }
  },
function(err, results){
if (err) console.log(err);
console.log(results);

})
