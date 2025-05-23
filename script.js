const apiKey = "9c9d63d96ba533dec213db37b92fcafa";

async function checkWeather(city) {
  //API Used
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let response = await fetch(apiURL);
  if (response.status == 404) {
    document.querySelector(".err").style.display = "block";
    document.querySelector(".weather ").style.display = "none";
  } else {
    let data = await response.json();

    //DOM Updation
    document.querySelector(".temp").innerText = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km /hr`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;

    let weatherIcon = document.querySelector(".weather-icon");

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/mist.png";
    } else if (data.weather[0].main == "Humidity") {
      weatherIcon.src = "./assets/humidity.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./assets/snow.png";
    } else if (data.weather[0].main == "Wind") {
      weatherIcon.src = "./assets/wind.png";
    }

    document.querySelector(".weather ").style.display = "block";
    document.querySelector(".err").style.display = "none";
  }
}

//Value For Search
let search = document.querySelector(".search input");
let btn = document.querySelector(".search button");
btn.addEventListener("click", () => {
  checkWeather(search.value);
});
