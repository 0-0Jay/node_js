const fs = require("fs");

console.log("start");
fs.readFile("./data4.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
    throw err;
  }
  console.log(data);
});
console.log("end");
