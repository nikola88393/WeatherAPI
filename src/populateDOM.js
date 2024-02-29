export function injectForecastData(data) {
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

    const windKph = document.getElementById("windKph");
    const windMph = document.getElementById("windMph");

    region.innerHTML = `${data.region}, ${data.country}`;
    localTime.innerHTML = data.localTime;

    condition.innerHTML = data.condition;
    conditionIcon.setAttribute("src", `${data.conditionIcon}`);
    conditionIcon.setAttribute("alt", `${data.condition} icon`);

    tempC.innerHTML = `Temp: ${data.tempC}C`;
    feelslikeC.innerHTML = `Feels like: ${data.feelslikeC}C`;
    tempF.innerHTML = `Temp: ${data.tempF}F`;
    feelslikeF.innerHTML = `Feels like: ${data.feelslikeF}F`;

    humidity.innerHTML = `Humidity: ${data.humidity}%`;

    windKph.innerHTML = `Wind: ${data.windKph} kph`;
    windMph.innerHTML = `Wind: ${data.windMph} mph`;
  }
}

export function switchMetrics() {
  const btn = document.getElementById("changeMetrics");
  btn.innerHTML = btn.innerHTML === "F/Mph" ? "C/Kph" : "F/Mph";

  document.getElementById("tempC").classList.toggle("hidden");
  document.getElementById("feelslikeC").classList.toggle("hidden");
  document.getElementById("tempF").classList.toggle("hidden");
  document.getElementById("feelslikeF").classList.toggle("hidden");
  document.getElementById("windKph").classList.toggle("hidden");
  document.getElementById("windMph").classList.toggle("hidden");
}
