//sort()
let fruits = ["banana", "orange", "apple", "mango"];
fruits.sort();
// console.log(fruits);

let numbers = [23, 17, 1, 10, 54, 100];
numbers.sort((a, b) => a - b);
// console.log(numbers);

let members = [
  { name: "홍", point: 100 },
  { name: "박", point: 150 },
  { name: "김", point: 200 },
];
members.sort((a, b) => (a.name < b.name ? -1 : 1));
// console.log(members);

fetch("http://localhost:3000/posts")
  .then((resp) => resp.json())
  .then((result) => {
    result.sort((a, b) => (a.author < b.author ? -1 : 1));
    console.log(result);
  });
