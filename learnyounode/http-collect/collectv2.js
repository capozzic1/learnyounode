const http = require('http');
const async = require('async');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const arr = [url1, url2, url3];

//solution using async map

async.map(arr, getData, (err, res) => {
  res.forEach(item => console.log(item))
  //console.log(res.length);
})

function getData(url, done){
	http.get(url, (response) => {
		let str = '';
		response.setEncoding("utf8")
		response.on("data", (data) => str += data);
		response.on("end", () => {

			//let len = str.length;
			done(null, str);
			});

			response.on("error", (error) => {

				done(error);
			});
		});

}
