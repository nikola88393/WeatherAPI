// fetch weather data for a specific location using async function
export default async function fetchWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=48421e04842e4cbfa00194151240902&q=${location}`,
      { mode: "cors" }
    );
    const data = await response.json();

    const tempC = data.current.temp_c;
    const tempF = data.current.temp_f;
    const humid = data.current.humidity;

    return { tempC, tempF, humid };
  } catch (err) {
    console.log(err);
  }
}
