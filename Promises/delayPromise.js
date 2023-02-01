function delay(data, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), ms);
  })
    .then((a) => console.log(a))
    .catch(() => console.log("error"));
}

delay("this is the delay content", 3000);
