const ar1 = [4, 5, 6];
const ar2 = [1, 2, 3];
const ar3 = [...ar1, ...ar2];
// console.log(ar3);

const forAry = [];
for (let i = 0; i < 5; i++) {
  forAry[i] = [];
  for (let j = 1; j <= 5; j++) {
    forAry[i].push(i * 5 + j);
  }
}
// console.log(forAry);

const forAry1 = [];
for (let i = 0; i < 5; i++) {
  forAry1[i] = [];
  for (let j = 5; j >= 1; j--) {
    forAry1[i].push((5 - i - 1) * 5 + j);
  }
}
// console.log(forAry1);

const forAry2 = [];
for (let i = 1; i <= 5; i++) {
  forAry2[i - 1] = [];
  for (let j = 0; j < 5; j++) {
    forAry2[i - 1].push(i + j * 5);
  }
}
// console.log(forAry2);

const forAry3 = [];
for (let i = 0; i < 5; i++) {
  forAry3.push([0, 0, 0, 0, 0]);
}
let que = [[0, 0]];
let key = 0;
let num = 0;
dt = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let t = 0;
while (num < 25) {
  let x = que[key][0];
  let y = que[key++][1];
  console.log(x, y);
  forAry3[x][y] = ++num;
  let dx = x + dt[t][0];
  let dy = y + dt[t][1];
  if (!(0 <= dx && dx < 5 && 0 <= dy && dy < 5 && forAry3[dx][dy] == 0)) {
    t = (t + 1) % 4;
    dx = x + dt[t][0];
    dy = y + dt[t][1];
  }
  que.push([dx, dy]);
}
console.log(forAry3);
