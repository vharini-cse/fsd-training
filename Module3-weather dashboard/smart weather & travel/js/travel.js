// Smart Weather & Travel Dashboard
// Travel Suggestions

const weatherType = document.getElementById("weatherType");
const suggestBtn = document.getElementById("suggestBtn");

const travelResult = document.getElementById("travelResult");
const travelIcon = document.getElementById("travelIcon");
const travelTitle = document.getElementById("travelTitle");
const travelDescription = document.getElementById("travelDescription");

const suggestionGrid = document.getElementById("suggestionGrid");


// Travel suggestions based on weather
const travelData = {
    sunny: {
        icon: "☀️",
        title: "Perfect Day to Explore!",
        description:
            "The weather is bright and sunny. It is a great time for outdoor activities, sightseeing and exploring local attractions.",
        suggestions: [
            "🏖️ Visit beaches and outdoor attractions",
            "📸 Explore famous landmarks",
            "🚶 Take a city walking tour",
            "🌳 Spend time in a park or garden",
            "🕶️ Carry sunglasses and sunscreen",
            "💧 Keep yourself hydrated"
        ]
    },

    cloudy: {
        icon: "☁️",
        title: "A Calm Cloudy Day",
        description:
            "Cloudy weather is comfortable for exploring the city without too much direct sunlight.",
        suggestions: [
            "🏛️ Visit museums and historical places",
            "☕ Explore cafés and local restaurants",
            "🛍️ Go shopping",
            "📸 Explore city streets",
            "🚶 Take a relaxed walking tour",
            "🧥 Carry a light jacket"
        ]
    },

    rainy: {
        icon: "🌧️",
        title: "Rainy Day Adventures",
        description:
            "Rainy weather calls for indoor activities and a little extra preparation if you need to travel outside.",
        suggestions: [
            "🏛️ Visit museums and galleries",
            "☕ Enjoy a cozy café",
            "🎬 Watch a movie",
            "🛍️ Explore indoor shopping malls",
            "☔ Carry an umbrella or raincoat",
            "👟 Wear comfortable waterproof footwear"
        ]
    },

    cold: {
        icon: "❄️",
        title: "Stay Warm & Explore",
        description:
            "The temperature is cold, so plan activities that keep you comfortable and warm.",
        suggestions: [
            "🏔️ Explore scenic viewpoints",
            "☕ Try local hot beverages",
            "🏛️ Visit indoor attractions",
            "🍲 Experience local cuisine",
            "🧥 Wear warm layered clothing",
            "🧣 Carry a scarf and gloves"
        ]
    },

    pleasant: {
        icon: "🌤️",
        title: "A Wonderful Day for Travel",
        description:
            "The weather looks pleasant and comfortable. It is a great opportunity to explore both indoor and outdoor attractions.",
        suggestions: [
            "📸 Explore popular landmarks",
            "🌳 Visit parks and gardens",
            "🚶 Take a walking tour",
            "🍽️ Try local food",
            "🚲 Enjoy outdoor activities",
            "🎒 Carry a small travel bag"
        ]
    }
};


// Convert OpenWeatherMap condition to our travel categories
function convertWeatherCondition(condition) {
    if (!condition) {
        return "pleasant";
    }

    condition = condition.toLowerCase();

    if (
        condition.includes("rain") ||
        condition.includes("drizzle") ||
        condition.includes("thunderstorm")
    ) {
        return "rainy";
    }

    if (
        condition.includes("snow")
    ) {
        return "cold";
    }

    if (
        condition.includes("mist") ||
        condition.includes("fog") ||
        condition.includes("haze")
    ) {
        return "cloudy";
    }

    if (condition.includes("cloud")) {
        return "cloudy";
    }

    if (condition.includes("clear")) {
        return "sunny";
    }

    return "pleasant";
}


// Display travel suggestions
function showTravelSuggestions(type) {

    const data = travelData[type];

    if (!data) {
        return;
    }

    // Show main result
    travelIcon.textContent = data.icon;
    travelTitle.textContent = data.title;
    travelDescription.textContent = data.description;

    travelResult.style.display = "block";

    // Clear previous suggestions
    suggestionGrid.innerHTML = "";

    // Add new suggestions
    data.suggestions.forEach(function (suggestion) {

        const card = document.createElement("div");

        card.className = "suggestion-card";

        card.innerHTML = `
            <span>${suggestion}</span>
        `;

        suggestionGrid.appendChild(card);
    });

    // Save selected weather type
    localStorage.setItem("travelWeatherType", type);

    // Smooth scroll to result
    travelResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// Button click
suggestBtn.addEventListener("click", function () {

    const selectedType = weatherType.value;

    showTravelSuggestions(selectedType);
});


// Load weather condition from Weather page
const savedCondition = localStorage.getItem("weatherCondition");

if (savedCondition) {

    const convertedType = convertWeatherCondition(savedCondition);

    weatherType.value = convertedType;

    showTravelSuggestions(convertedType);

} else {

    // Default option
    weatherType.value = "pleasant";

    showTravelSuggestions("pleasant");
}