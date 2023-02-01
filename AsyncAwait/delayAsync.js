<<<<<<< HEAD


async function delay(ms) {
  let promise = new Promise((resolve) => setTimeout(resolve, ms));

  await promise // wait until the promise resolves
    .then(() => console.log("this is delay function"))
    .catch((error) => {
      console.log(error);
    });
}

delay(3000);
=======
function Time(data, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), ms);
  });
}

async function delay(data, ms) {
  await Time(data, ms).then((a) => {
    console.log(a);
  });
}

delay("This is delay Content", 3000);
>>>>>>> abf0e16 (sec commit)
