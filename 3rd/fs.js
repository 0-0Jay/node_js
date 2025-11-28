const fs = require("fs");

function fileWriteFnc() {
  // 비동기 처리
  // console.log("start");
  // fs.writeFile("./write.txt", "Hello, World", "utf-8", (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("done");
  // });
  // console.log("end");

  // 동기 처리
  fs.writeFileSync("./write.txt", "nice to meet you.");
  console.log("done");
}

function fileReadFnc() {
  // 비동기 처리
  // console.log("start");
  // fs.readFile("./data.txt", "utf-8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(data);
  // });
  // console.log("end");

  //동기 처리
  // console.log("start");
  const data = fs.readFileSync("./data.txt", "utf-8");
  console.log(data);
  // console.log("end");
}

// data 읽어서 여학생들만 women.txt에 작성
let data = fs.readFileSync("./data.txt", "utf-8");
data = data.split("\r\n");
let tmp = data.reduce((acc, elem) => {
  elem = elem.split(",");
  if (elem[2] == "여") {
    acc.push(elem);
  }
  return acc;
}, []);
fs.writeFileSync("./women.txt", tmp.join("\n").toString());
