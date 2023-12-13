async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      
        // Set weather icon based on weather conditions
        setWeatherIcon(data.weather[0].main);

        // Display weather details
        weatherDiv.style.display = "block";
        errorDiv.style.display = "none";
    } catch (error) {
        console.error(error);
        // Display error message
        errorDiv.style.display = "block";
        weatherDiv.style.display = "none";
    }
}

function setWeatherIcon(weatherCondition) {
    switch (weatherCondition) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "Sunny":
            weatherIcon.src = "images/sunny.png";
            break;
        default:
            weatherIcon.src = "images/unknown.png";
            break;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});