// fetch weather data for a specific location using async function
export default async function fetchWeatherData(locationInput) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=48421e04842e4cbfa00194151240902&q=${locationInput}`,
    { mode: "cors" }
  );

  if (!response.ok) {
    return { error: "Location not found." };
  }

  const data = await response.json();

  const condition = data.current.condition.text;
  const conditionIcon = data.current.condition.icon;

  const region = data.location.name;
  const { country } = data.location;
  const localTime = data.location.localtime;

  const tempC = data.current.temp_c;
  const feelslikeC = data.current.feelslike_c;

  const tempF = data.current.temp_f;
  const feelslikeF = data.current.feelslike_f;

  const { humidity } = data.current;

  const windKph = data.current.gust_kph;
  const windMph = data.current.gust_mph;

  console.log(data);

  return {
    condition,
    conditionIcon,
    region,
    country,
    localTime,
    tempC,
    feelslikeC,
    tempF,
    feelslikeF,
    humidity,
    windKph,
    windMph,
  };
}
