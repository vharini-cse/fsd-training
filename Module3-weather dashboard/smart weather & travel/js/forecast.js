// Smart Weather & Travel Dashboard
// 5-Day Weather Forecast

const API_KEY = "8823f695d14882ec7e542481675d35d0";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast";

const cityInput = document.getElementById("forecastCity");
const searchButton = document.getElementById("forecastSearchBtn");

const loading = document.getElementById("forecastLoading");
const errorMessage = document.getElementById("forecastError");

const forecastCityName = document.getElementById("forecastCityName");
const forecastContainer = document.getElementById("forecastContainer");


// Hide forecast initially
forecastContainer.style.display = "none";


// Get weather forecast
async function getForecast(city) {

    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    if (API_KEY === "YOUR_API_KEY_HERE") {
        showError("Please add your OpenWeatherMap API key in forecast.js.");
        return;
    }

    loading.style.display = "block";
    errorMessage.textContent = "";
    forecastContainer.style.display = "none";

    try {

        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {

            if (response.status === 404) {
                throw new Error(
                    "City not found. Please check the city name."
                );
            }

            if (response.status === 401) {
                throw new Error(
                    "Invalid API key. Please check your API key."
                );
            }

            throw new Error(
                "Unable to fetch forecast information."
            );
        }

        const data = await response.json();

        displayForecast(data);

    } catch (error) {

        showError(error.message);

    } finally {

        loading.style.display = "none";
    }
}


// Display forecast
function displayForecast(data) {

    forecastCityName.textContent =
        `${data.city.name}, ${data.city.country}`;

    // Clear old forecast cards
    forecastContainer.innerHTML = "";

    // Group forecast data by date
    const dailyForecasts = {};

    data.list.forEach(function (item) {

        const date = new Date(item.dt * 1000);

        const dateKey = date.toISOString().split("T")[0];

        if (!dailyForecasts[dateKey]) {
            dailyForecasts[dateKey] = [];
        }

        dailyForecasts[dateKey].push(item);
    });


    // Get first 5 days
    const dates = Object.keys(dailyForecasts).slice(0, 5);


    dates.forEach(function (dateKey) {

        const dayData = dailyForecasts[dateKey];

        // Find forecast closest to 12 PM
        let selectedForecast = dayData[0];

        dayData.forEach(function (item) {

            const hour = new Date(item.dt * 1000).getHours();

            const selectedHour =
                new Date(selectedForecast.dt * 1000).getHours();

            if (Math.abs(hour - 12) < Math.abs(selectedHour - 12)) {
                selectedForecast = item;
            }
        });


        createForecastCard(selectedForecast);
    });


    forecastContainer.style.display = "grid";
}


// Create forecast card
function createForecastCard(data) {

    const date = new Date(data.dt * 1000);

    const dayName = date.toLocaleDateString("en-US", {
        weekday: "short"
    });

    const fullDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short"
    });


    const temperature =
        Math.round(data.main.temp);

    const feelsLike =
        Math.round(data.main.feels_like);

    const description =
        data.weather[0].description;

    const condition =
        data.weather[0].main;

    const humidity =
        data.main.humidity;

    const windSpeed =
        Math.round(data.wind.speed * 3.6);

    const iconCode =
        data.weather[0].icon;


    const card = document.createElement("div");

    card.className = "forecast-card";


    card.innerHTML = `
        <div class="forecast-day">
            <h3>${dayName}</h3>
            <p>${fullDate}</p>
        </div>

        <div class="forecast-icon">
            <img
                src="https://openweathermap.org/img/wn/${iconCode}@2x.png"
                alt="${description}"
            >
        </div>

        <div class="forecast-temperature">
            ${temperature}°C
        </div>

        <div class="forecast-condition">
            ${condition}
        </div>

        <p class="forecast-description">
            ${capitalize(description)}
        </p>

        <div class="forecast-details">

            <span>
                🌡️ Feels like ${feelsLike}°C
            </span>

            <span>
                💧 Humidity ${humidity}%
            </span>

            <span>
                💨 Wind ${windSpeed} km/h
            </span>

        </div>
    `;


    forecastContainer.appendChild(card);
}


// Capitalize first letter
function capitalize(text) {

    if (!text) {
        return "";
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}


// Show error
function showError(message) {

    errorMessage.textContent = message;

    forecastContainer.style.display = "none";
}


// Search button
searchButton.addEventListener("click", function () {

    const city = cityInput.value.trim();

    getForecast(city);
});


// Press Enter to search
cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const city = cityInput.value.trim();

        getForecast(city);
    }
});


// Load saved city
const savedCity = localStorage.getItem("selectedCity");

if (savedCity) {

    cityInput.value = savedCity;

    getForecast(savedCity);
}