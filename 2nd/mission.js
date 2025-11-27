const { Console } = require("console");
const fs = require("fs");

// 문제
let cnt = 0;
const interval = setInterval(() => {
  const success = fs.createWriteStream("./success.txt", { flags: "a" });
  const fail = fs.createWriteStream("./fail.txt", { flags: "a" });
  const logger = new Console({ stdout: success, stderr: fail });
  if (Math.ceil(Math.random() * 10) % 2 == 0) {
    console.log("실패!");
    logger.error("실패!");
  } else {
    console.log("성공!");
    logger.log("성공!");
  }
  cnt++;
  if (cnt == 10) clearInterval(interval);
}, 1000);

console.time("job");
let sum = 0;
for (let i = 1; i <= 1000000; i++) {
  sum = i;
}
console.timeEnd("job");
