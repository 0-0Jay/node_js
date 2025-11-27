const { promiseCall } = require("./promise.js");
const fs = require("fs");

fs.readFile("./class.js", "utf-8", (err, data) => {
  if (err) {
    // console.log(err);
    return;
  }
  //   console.log(data);
});
const data = fs.readFileSync("./class.js", "utf-8");
console.log(data);

console.log("end of prog.");
