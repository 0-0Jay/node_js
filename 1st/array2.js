// filter
let numbers = [];

// console.log(Math.ceil(Math.random() * 100));
for (let i = 0; i < 10; i++) {
  numbers.push(Math.ceil(Math.random() * 100));
}
console.log(numbers);

let result = numbers.filter((elem) => elem % 2 == 0);
console.log(result);

// fetch("http://localhost:4000/boards")
//   .then((resp) => resp.json())
//   .then((result) => {
//     let fresult = result.filter((elem) => {
//       return elem.CONTENT.includes("번");
//     });
//     console.log(fresult);
//   });

// map
let friends = [
  { firstName: "길동", lastName: "홍", phone: "010-1111" },
  { firstName: "민수", lastName: "김", phone: "010-2222" },
  { firstName: "우석", lastName: "최", phone: "010-3333" },
];
let mfriends = friends.map((elem) => {
  let obj = {};
  obj.name = elem.lastName + " " + elem.firstName;
  obj.tel = elem.phone;
  return obj;
});
console.log(mfriends);
