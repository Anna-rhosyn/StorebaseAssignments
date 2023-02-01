var fs = require("fs");

function file() {
  return new Promise((resolve) => setTimeout(resolve));
}

file().then(function () {
  fs.readFile("fsExample.txt", (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("read the file");
  });
  return file().then(function () {
    fs.copyFile("fsEXample.txt", "copied.txt", function (err) {
      if (err) {
        console.log("Error copying file");
      }
      console.log("File Copied");
    });
    return file().then(function () {
      fs.readFile("copied.txt", (err, data) => {
        if (err) {
          return console.log(err);
        }
        console.log(`Content in File copied is: \n  ${data}`);
      });
    });
  });
});

file();
