function helloworld() {
  setTimeout(function () {
    console.log("h");
    setTimeout(function () {
      console.log("e");
      setTimeout(function () {
        console.log("l");
        setTimeout(function () {
          console.log("l");
          setTimeout(function () {
            console.log("o");
            setTimeout(function () {
              console.log("w");
              setTimeout(function () {
                console.log("o");
                setTimeout(function () {
                  console.log("r");
                  setTimeout(function () {
                    console.log("l");
                    setTimeout(function () {
                      console.log("d");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

helloworld();
