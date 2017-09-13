const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const arr = [url1, url2, url3];
const strArr = [];
let len = arr.length;
//console.log(arr);

function get(url){

return new Promise((resolve, reject) => {
	http.get(url, (response) => {

		response.setEncoding('utf8');
		response.on("data", (data) => strArr.push(data));
		response.on("end", () => {
			let str = strArr.join("");
			//let len = str.length;
			resolve(str);
			});

			response.on("error", (error) => {

				reject("errorrrrrr")
			});
		});
})
}

for (let i = 0; i < len; i++){
get(arr[i]).then((val) => console.log(val));


	//get(arr[i]);
	//.catch((err) => console.log(err));
}
