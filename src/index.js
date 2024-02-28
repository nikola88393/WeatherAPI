import "./style.css";
import fetchWeatherData from "./fetchData";

const btn = document.getElementById("check-weather");
btn.addEventListener("click", async () => {
  const location = document.getElementById("location").value;
  const weather = await fetchWeatherData(location);

  console.log(weather.tempC);
  console.log(weather.tempF);
  console.log(weather.humid);
});
console.log("This is the main js file");
