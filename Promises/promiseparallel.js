const fs = require("fs");
const { resolve } = require("path");

const arr1 = [
  "./txtfiles/copy.txt",
  "./txtfiles/copy2.txt",
  "./txtfiles/copy3.txt",
];

const arr2 = ["./txtfiles/cp.txt", "./txtfiles/cp2.txt", "./txtfiles/cp3.txt"];

//Passing arrays content to arrays fn
arrays(arr1, arr2);

//Passing each file from arr1 & arr2  to task fn
function arrays(arr1, arr2) {
  arr1.forEach((n1, index) => {
    const n2 = arr2[index];
    // console.log(n1, n2);
    Task(n1, n2);
  });
}

//calling read fn by passing both src & dest and shows final content copied in arr2
function Task(n1, n2) {
  //   console.log(n1, n2);
  return new Promise(() => {
    Read(n1, n2).then((arr2) => {
      fs.readFile(arr2, (err, data) => {
        if (err) {
          console.log("Error showing contents in arr2");
        }
        console.log(`\n Contents in arr2  : \n  ${data}`);
      });
    });
  });
}

//reads arr1 files and calls write fn
function Read(n1, n2) {
  return new Promise((resolve) => {
    fs.readFile(n1, (err, data) => {
      if (err) {
        console.log("error reading arr1");
      } else {
        console.log(`Content in arr1 : \n ${data} \n`);
        resolve(Write(n2, data));
      }
    });
  });
}
//write contents to arr2 and passes resolve arr2 to task fn
function Write(n2, n1) {
  return new Promise((resolve) => {
    fs.writeFile(n2, n1, (err) => {
      if (err) {
        console.log("error copying files to arr2");
      }
      //   resolve(data);
      console.log(`Copied Successfully to arr2`);
      resolve(n2);
    });
  });
}
