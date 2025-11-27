// 동기 방식
let x = 10;
x += 2;
x *= 3;
x -= 5;
console.log(x);

// 비동기 방식
// let y = 10;
// setTimeout(() => {
//   y += 2;
// }, 1500);
// setTimeout(() => {
//   y *= 3;
// }, 1000);
// setTimeout(() => {
//   y -= 5;
// }, 500);
// console.log(y);

// promise
// promise 객체 상태 => 성공 시 fullfilled, 실패 시 rejected, 최초 요청 pending
const promise = new Promise((resolve, reject) => {
  console.log("welcome");
  if (Math.ceil(Math.random() * 10) % 2 == 0) resolve("ok");
  else reject("fail");
});

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

x = 10;
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    x += 2;
    resolve(x);
  }, 1500);
});

promise1
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        x *= 3;
        resolve(x);
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        x -= 5;
        resolve(x);
      }, 500);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

async function promiseCall() {
  let x = 10;
  try {
    x = await new Promise((resolve, reject) => {
      setTimeout(() => {
        x += 2;
        resolve(x);
      }, 1500);
    });
    x = await new Promise((resolve, reject) => {
      setTimeout(() => {
        x *= 3;
        resolve(x);
      }, 1000);
    });
    x = await new Promise((resolve, reject) => {
      setTimeout(() => {
        x -= 5;
        resolve(x);
      }, 1000);
    });
    console.log(x);
  } catch (err) {
    reject(err);
  }
}
promiseCall();

module.exports = { promiseCall };
