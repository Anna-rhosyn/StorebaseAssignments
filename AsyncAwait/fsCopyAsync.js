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
