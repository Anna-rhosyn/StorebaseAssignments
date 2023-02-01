

async function delay(ms) {
  let promise = new Promise((resolve) => setTimeout(resolve, ms));

  await promise // wait until the promise resolves
    .then(() => console.log("this is delay function"))
    .catch((error) => {
      console.log(error);
    });
}

delay(3000);
