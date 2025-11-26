const { students } = require("./data");

let id = "user01";
let email = "user01@email.com";

console.log(`${id} ${email}`);
console.log(`${students.map((elem) => elem.name).sort()}`);
