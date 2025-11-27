const process = require("process");

console.time("job");
let times = 1;
const job = setInterval(() => {
  console.log(`times => ${times}`);
  times++;
  if (times == 10) clearInterval(job);
  process.exit();
}, 1000);

process.on("beforeExit", () => {
  console.log("beforeExit event call");
  console.log(process.env.Path.split(";"));
});

process.on("exit", () => {
  console.log("exit event call");
  console.timeEnd("job");
});
