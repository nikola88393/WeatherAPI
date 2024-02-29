export default function injectForecastData(data) {
  const error = document.getElementById("error");
  error.innerHTML = "";

  if (data.error) {
    error.innerHTML = data.error;
  } else {
    const region = document.getElementById("region");
    const localTime = document.getElementById("localTime");

    const condition = document.getElementById("condition");
    const conditionIcon = document.getElementById("conditionIcon");

    const tempC = document.getElementById("tempC");
    const feelslikeC = document.getElementById("feelslikeC");
    const tempF = document.getElementById("tempF");
    const feelslikeF = document.getElementById("feelslikeF");
    const humidity = document.getElementById("humidity");

    region.innerHTML = `Location: ${data.region}, ${data.country}`;
    localTime.innerHTML = `Current time: ${data.localTime}`;

    condition.innerHTML = `Condition: ${data.condition}`;
    conditionIcon.setAttribute("src", `${data.conditionIcon}`);
    conditionIcon.setAttribute("alt", `${data.condition} icon`);

    tempC.innerHTML = `Temp: ${data.tempC}C`;
    feelslikeC.innerHTML = `Feels like: ${data.feelslikeC}C`;
    tempF.innerHTML = `Temp: ${data.tempF}F`;
    feelslikeF.innerHTML = `Feels like: ${data.feelslikeF}F`;
    humidity.innerHTML = `Humidity: ${data.humidity}%`;
  }
}
