async function getWeather() {
  const city = encodeURIComponent(document.getElementById('cityInput').value.trim());
  const apiKey = 'your_actual_api_key_here';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // debug

    if (data.cod === 200) {
      // ✅ Success
    } else {
      document.getElementById("weatherResult").innerHTML = `<p style="color: hotpink;">❌ City not found!</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>⚠️ Network error!</p>`;
  }
}
