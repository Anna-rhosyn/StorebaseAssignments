<<<<<<< HEAD
var fs = require("fs");

function file() {
  return new Promise((resolve) => setTimeout(resolve));
}
async function asyncfile() {
  await file().then(function () {
    fs.readFile("fsExample.txt", (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("read the file");
    });
  });
  await file().then(function () {
    fs.copyFile("fsEXample.txt", "copied.txt", function (err) {
      if (err) {
        console.log("Error copying file");
      }
      console.log("File Copied");
    });
  });
  await file().then(function () {
    fs.readFile("copied.txt", (err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Content in File copied is: \n  ${data}`);
    });
  });
}
asyncfile();
=======
const fs = require("fs");

async function Read(start, end) {
  return new Promise((resolve) => {
    fs.readFile(start, (err, data) => {
      if (err) {
        console.log("error reading");
      } else {
        console.log("read the file");
        resolve(Write(end, data));
      }
    });
  });
}

async function Write(end, src) {
  return new Promise((resolve) => {
    fs.writeFile(end, src, (err) => {
      if (err) {
        console.log("error copying");
      }
      console.log(`Succesfully copying the file.`);
      resolve(end);
    });
  });
}

async function copy(start, end) {
  await Read(start, end).then((final) => {
    fs.readFile(final, (err, data) => {
      if (err) {
        console.log("error printing Content");
      }
      console.log(`Content in the Destination file is : \n ${data}`);
    });
  });
}

copy("src.txt", "dest.txt");
>>>>>>> abf0e16 (sec commit)
