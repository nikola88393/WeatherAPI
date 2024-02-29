import "./style.css";
import fetchWeatherData from "./fetchData";
import { injectForecastData, switchMetrics } from "./populateDOM";

const btn = document.getElementById("check-weather");
btn.addEventListener("click", async () => {
  const location = document.getElementById("locationInput").value;
  const weather = await fetchWeatherData(location);

  injectForecastData(weather);
});

document.getElementById("changeMetrics").addEventListener("click", () => {
  switchMetrics();
});
