function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000)
  .then(() => console.log("this is delay function"))
  .catch((error) => {
    console.log(error);
  });
