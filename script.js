const apiKey = "9c9d63d96ba533dec213db37b92fcafa";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

async function checkWeather() {
  try {
    const response = await fetch(apiURL + `appid = ${apiKey}`);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Failed to get the information ${error}`);
  }
}
