function helloworld(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function world() {
  await helloworld(1000).then(function () {
    console.log("h");
  });
  await helloworld(1000).then(function () {
    console.log("e");
  });
  await helloworld(1000).then(function () {
    console.log("l");
  });
  await helloworld(1000).then(function () {
    console.log("l");
  });
  await helloworld(1000).then(function () {
    console.log("o");
  });
  await helloworld(1000).then(function () {
    console.log("w");
  });
  await helloworld(1000).then(function () {
    console.log("o");
  });
  await helloworld(1000).then(function () {
    console.log("r");
  });
  await helloworld(1000).then(function () {
    console.log("l");
  });
  await helloworld(1000).then(function () {
    console.log("d");
  });
}

world();
