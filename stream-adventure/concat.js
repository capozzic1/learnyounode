const concat = require('concat-stream');

let concatStream = concat(reverse);
process.stdin.pipe(concatStream)

function reverse(string) {
  let strArr = string.toString().split('').reverse();

  //strArr.reverse();
  let newStr = strArr.join("");
  process.stdout.write(newStr);
}
