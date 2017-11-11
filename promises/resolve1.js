let onReject = (error) => {
  console.log(error);
}

new Promise((resolve, reject) => {
  resolve("I FIRED");

  reject(new Error("I DID NOT FIRE."));
})
.then((val) => console.log(val), onReject);
