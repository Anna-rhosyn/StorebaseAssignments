function Delay(a, call) {
  setTimeout(() => call(a), 1000);
}
function helloworld() {
  Delay("h", (a) => {
    console.log(a);
    Delay("e", (a) => {
      console.log(a);
      Delay("l", (a) => {
        console.log(a);
        Delay("l", (a) => {
          console.log(a);
          Delay("o", (a) => {
            console.log(a);
            Delay("w", (a) => {
              console.log(a);
              Delay("o", (a) => {
                console.log(a);
                Delay("r", (a) => {
                  console.log(a);
                  Delay("l", (a) => {
                    console.log(a);
                    Delay("d", (a) => {
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

helloworld();
