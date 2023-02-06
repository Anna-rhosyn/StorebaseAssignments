//
Promise.all([weather("thrissur"), weather("goa")]).then(() =>
  Promise.all([weather("kochi")]).then(() =>
    Promise.all([weather("mumbai"), weather("pune"), weather("delhi")]).then(
      () => Promise.all([weather("canada"), weather("california")])
    )
  )
);

// Promise.all([p1, p2]).then((val) => console.log(val));

function weather(city) {
  new Promise((resolve) => {
    var key = `d06d88f51991e05fc9bfb87ae954ca05`;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => resolve(data))
      .catch((err) => console.log(err));
  }).then((data) => showWeather(data));
}

function showWeather(data) {
  console.log(`
  ${data.weather[0].description}
  ${Math.round(data.main.temp)}
  ${data.name}
  ${data.sys.country}
  
  `);
}
