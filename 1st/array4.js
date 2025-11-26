const { students } = require("./data.js");

let studArray = students.reduce((acc, elem) => {
  if (acc[elem.class] == undefined) {
    acc[elem.class] = [];
  }
  acc[elem.class].push(elem);
  return acc;
}, {});

console.log(studArray);
