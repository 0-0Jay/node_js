const reg = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, }$/; // new RegExp();
let email = "user01@email.com";
console.log(reg.test(email));

let phone = "410-2343-9870";
const telReg = /^0[0-9]{2}\-[0-9]{3,4}\-[0-9]{4}$/;
console.log(telReg.test(phone));
