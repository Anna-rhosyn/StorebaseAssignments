function Delay(a) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a), 1000);
  });
}

function hello() {
  Delay("h")
    .then((a) => {
      console.log(a);
    })
    .then(() => {
      Delay("e")
        .then((a) => {
          console.log(a);
        })
        .then(() => {
          Delay("l")
            .then((a) => {
              console.log(a);
            })
            .then(() => {
              Delay("l")
                .then((a) => {
                  console.log(a);
                })
                .then(() => {
                  Delay("o")
                    .then((a) => {
                      console.log(a);
                    })
                    .then(() => {
                      Delay("w")
                        .then((a) => {
                          console.log(a);
                        })
                        .then(() => {
                          Delay("o")
                            .then((a) => {
                              console.log(a);
                            })
                            .then(() => {
                              Delay("r")
                                .then((a) => {
                                  console.log(a);
                                })
                                .then(() => {
                                  Delay("l")
                                    .then((a) => {
                                      console.log(a);
                                    })
                                    .then(() => {
                                      Delay("d").then((a) => {
                                        console.log(a);
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
}

hello();
