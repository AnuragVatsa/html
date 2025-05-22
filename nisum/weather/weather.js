const weatherData = [
  { country: "USA", temp: 25, condition: "Sunny" },
  { country: "India", temp: 30, condition: "Hot" },
  { country: "UK", temp: 15, condition: "Cloudy" },
  { country: "Canada", temp: 10, condition: "Snowy" }
];

document.getElementById("countryInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const country = e.target.value.trim();
    const weather = weatherData.find(data => data.country.toLowerCase() === country.toLowerCase());
    const weatherDetails = document.getElementById("weatherDetails");
    if (weather) {
      weatherDetails.innerHTML = `
        <h3>${weather.country}</h3>
        <p>Temperature: ${weather.temp}°C</p>
        <p>Condition: ${weather.condition}</p>
      `;
    } else {
      weatherDetails.innerHTML = "<p>Country not found!</p>";
    }
  }
});
