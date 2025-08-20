    const apiKey ="b4efe9071b828dec4a2d22db9fb2f4d4"; 
    async function getWeather() {
      const city = document.getElementById("cityInput").value;
      const result = document.getElementById("result");

      if (!city) {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
      }

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === "404") {
          result.innerHTML = `<p>City not found ❌</p>`;
          return;
        }

        result.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <div class="temp">${data.main.temp}°C</div>
          <div class="desc">${data.weather[0].description}</div>
        `;
      } catch (error) {
        result.innerHTML = `<p>Something went wrong. Please try again.</p>`;
      }
    }
