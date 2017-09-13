var module = require('./module');
let dir = process.argv[2];
let ext = process.argv[3];

let testModule = module(dir, ext, (err, data) => {
  if (err) console.log(err);

  data.forEach((item, i) => console.log(item));
})
