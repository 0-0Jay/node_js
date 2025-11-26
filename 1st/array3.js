// filter(elem, idx, ary)
// reduce(acc, elem, idx, ary)

let numbers = [30, 20, 50, 60, 10, 70];
let result = numbers.reduce((acc, elem, idx, ary) => {
  // console.log(acc, elem, idx, ary);
  return elem;
});

fetch("http://localhost:4000/boards")
  .then((resp) => resp.json())
  .then((result) => {
    let fresult = result.reduce((acc, elem) => {
      if (elem.AUTHOR == "user03") {
        acc.push(elem);
      }
      return acc;
    }, []);
    console.log(fresult);
  });
