function helloworld(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

helloworld(1000).then(function () {
  console.log("h");
  return helloworld(1000).then(function () {
    console.log("e");
    return helloworld(1000).then(function () {
      console.log("l");
      return helloworld(1000).then(function () {
        console.log("l");
        return helloworld(1000).then(function () {
          console.log("o");
          return helloworld(1000).then(function () {
            console.log("w");
            return helloworld(1000).then(function () {
              console.log("o");
              return helloworld(1000).then(function () {
                console.log("r");
                return helloworld(1000).then(function () {
                  console.log("l");
                  return helloworld(1000).then(function () {
                    console.log("d");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


