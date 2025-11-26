const obj = {
  first: "John",
  last: "Doe",
  age: 37,
  email: "john@email.com",
};

const { first: f, last: l, age, email } = obj;
console.log(f, l, age, email);

const score = [20, 50, 30, 40, 70];
const [a, b, ...c] = score;
console.log(a, b, c);

// 매개값 초기값
function say(message = "파라미터 없음") {
  console.log(message);
}
say();

function sum(...args) {
  console.log(arguments); // arguments 매개변수 처리 객체
  let result = 0;
  // for (let prop in arguments) {
  //   result += arguments[prop];
  // }
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}
console.log(sum(1, 2, 3, 4));
