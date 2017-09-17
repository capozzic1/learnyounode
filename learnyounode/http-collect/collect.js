const http = require('http');
const async = require('async');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const arr = [url1, url2, url3];


//solution using promises

//gets data via get, resolves and rejects accordingly
function getData(url, resolve, reject){
	http.get(url, (response) => {
		let str = '';
		response.setEncoding("utf8")
		response.on("data", (data) => str += data);
		response.on("end", () => {

			//let len = str.length;
			resolve(str);
			});

			response.on("error", (error) => {

				reject(error);
			});
		});

}

/*
1. makes an array of promises
2. calls to the getData function with resolve/reject
3. getData will resolve the values.
4. Once each promise has been resolved, and all promises have been resolved,
promise.all will return an array of all the results.
*/
function makePromiseArray() {
	let promises = [];

	for (let i = 0; i < arr.length; i++){
		promises.push(new Promise((resolve, reject) => {
			getData(arr[i], resolve, reject);
		}))
	}

	return Promise.all(promises);

}

let result = makePromiseArray().then((results) => {
	results.forEach(item => console.log(item));
})
.catch((error) => console.log(error));
