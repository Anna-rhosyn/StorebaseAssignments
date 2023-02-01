const fs = require("fs");

let arr1 = ["srct.txt", "dest.txt", "fsExample.txt"];
let arr2 = [];
Write(arr2, arr1);

// fs.writeFile(
//   arr2,
//   arr1.map((n) => n)
// );

// console.log(arr1);

function Write(arr2, arr1) {
  //   console.log(arr1);
  return new Promise(() => {
    arr2.push(fs.copyFile(arr1, arr2));
  });
}
