import "./style.css";
import fetchWeatherData from "./fetchData";
import injectForecastData from "./populateDOM";

const btn = document.getElementById("check-weather");
btn.addEventListener("click", async () => {
  const location = document.getElementById("location").value;
  const weather = await fetchWeatherData(location);

  injectForecastData(weather);
});
