const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const arr = [];



function get(url){
return new Promise((resolve,reject) => { 
http.get(url, (response) => {
	response.setEncoding('utf8');
	response.on("data", (data) => arr.push(data));
	response.on("end", () => {
		let str = arr.join("");
		//let len = str.length; 
		resolve(str);
		});
	});
});
}

get(url1).then((val) => console.log(val));