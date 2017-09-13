const fs = require('fs');
const path = require('path');

//callback refers to the callback in program.js
module.exports = function(dir, ext, callback){

fs.readdir(dir, (err, data) => {
if (err) return callback(err);
  let filearr = [];
  let len = data.length;
  for (let i = 0; i < len; i++){
    let file = data[i];

    if (path.extname(file) == `.${ext}`){
      filearr.push(file);
    }
  }
  return callback(null, filearr);
})

}
