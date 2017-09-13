const fs = require('fs');
const path = require('path');
let dir = process.argv[2];
let ext = `.${process.argv[3]}`;

let read = fs.readdir(dir, (err, data) => {
if (err) console.log(err);
  let len = data.length;
  for (let i = 0; i < len; i++){
    let file = data[i];
    if (path.extname(file) == ext){
      console.log(file);
    }

  }

})





/* solution 1 using regexp

let extPatt = new RegExp(`.${ext}`);
let read = fs.readdir(dir, (err, data) => {
  //console.log(typeof data);

  let filtered = data.filter(file => file.match(extPatt));

  let len = filtered.length;
  for (let i = 0; i < len; i++){
    console.log(filtered[i]);
  }

  //console.log(filtered);
})

*/
