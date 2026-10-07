// =====================================================
// SMART WEATHER & TRAVEL DASHBOARD
// Current Weather JavaScript
// =====================================================


// Your OpenWeatherMap API key
const API_KEY = "8823f695d14882ec7e542481675d35d0";


// API URL
const API_URL = "https://api.openweathermap.org/data/2.5/weather";


// Get HTML elements
const cityInput = document.getElementById("weatherCity");
const searchButton = document.getElementById("weatherSearchBtn");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const weatherDescription = document.getElementById("weatherDescription");
const weatherIcon = document.getElementById("weatherIcon");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");


// Hide weather result initially
weatherResult.style.display = "none";


// =====================================================
// SEARCH WEATHER
// =====================================================

async function getWeather(city) {

    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    if (API_KEY === "YOUR_API_KEY_HERE") {
        showError("Please add your OpenWeatherMap API key in weather.js.");
        return;
    }


    // Show loading
    loading.style.display = "block";
    errorMessage.textContent = "";
    weatherResult.style.display = "none";


    try {

        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );


        // Check API response
        if (!response.ok) {

            if (response.status === 404) {
                throw new Error("City not found. Please check the city name.");
            }

            if (response.status === 401) {
                throw new Error("Invalid API key. Please check your API key.");
            }

            throw new Error("Unable to fetch weather information.");
        }


        // Convert response to JSON
        const data = await response.json();


        // Display weather
        displayWeather(data);


    } catch (error) {

        showError(error.message);

    } finally {

        loading.style.display = "none";

    }
}


// =====================================================
// DISPLAY WEATHER
// =====================================================

function displayWeather(data) {

    // City name
    cityName.textContent = `${data.name}, ${data.sys.country}`;


    // Weather description
    const description =
        data.weather[0].description;

    weatherDescription.textContent =
        description.charAt(0).toUpperCase() +
        description.slice(1);


    // Temperature
    temperature.textContent =
        `${Math.round(data.main.temp)}°C`;


    // Weather condition
    condition.textContent =
        data.weather[0].main;


    // Feels like
    feelsLike.textContent =
        `${Math.round(data.main.feels_like)}°C`;


    // Humidity
    humidity.textContent =
        `${data.main.humidity}%`;


    // Wind speed
    windSpeed.textContent =
        `${Math.round(data.wind.speed * 3.6)} km/h`;


    // Atmospheric pressure
    pressure.textContent =
        `${data.main.pressure} hPa`;


    // Dynamic weather icon
    const iconCode =
        data.weather[0].icon;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.alt =
        data.weather[0].description;


    // Show result
    weatherResult.style.display = "block";


    // Save city for other pages
    localStorage.setItem(
        "selectedCity",
        data.name
    );


    // Save weather condition for travel page
    localStorage.setItem(
        "weatherCondition",
        data.weather[0].main
    );
}


// =====================================================
// ERROR MESSAGE
// =====================================================

function showError(message) {

    errorMessage.textContent = message;

    weatherResult.style.display = "none";
}


// =====================================================
// SEARCH BUTTON
// =====================================================

searchButton.addEventListener("click", function () {

    const city =
        cityInput.value.trim();

    getWeather(city);

});


// =====================================================
// ENTER KEY SEARCH
// =====================================================

cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const city =
            cityInput.value.trim();

        getWeather(city);

    }

});


// =====================================================
// LOAD CITY FROM HOME PAGE
// =====================================================

const savedCity =
    localStorage.getItem("selectedCity");


if (savedCity) {

    cityInput.value = savedCity;

    getWeather(savedCity);

}