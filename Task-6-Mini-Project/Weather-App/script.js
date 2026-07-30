const API_KEY = "YOUR_API_KEY";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const weatherCard = document.getElementById("weatherCard");
const defaultMessage = document.getElementById("defaultMessage");
const errorMessage = document.getElementById("errorMessage");
const loadingMessage =
    document.getElementById("loadingMessage");

const cityName = document.getElementById("cityName");
const weatherDescription =
    document.getElementById("weatherDescription");

const temperature =
    document.getElementById("temperature");

    const weatherIcon =
    document.getElementById("weatherIcon");

const currentDate =
    document.getElementById("currentDate");

const humidity =
    document.getElementById("humidity");

const windSpeed =
    document.getElementById("windSpeed");

const feelsLike =
    document.getElementById("feelsLike");


weatherCard.style.display = "none";

loadingMessage.style.display = "none";


weatherForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {

        errorMessage.innerText =
            "Please enter a city name.";

        return;
    }

    getWeather(city);

});


async function getWeather(city) {

    errorMessage.innerText = "";

    weatherCard.style.display = "none";

    defaultMessage.style.display = "none";

    loadingMessage.style.display = "block";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );


        if (!response.ok) {

            throw new Error(
                "City not found"
            );

        }


        const data = await response.json();


        cityName.innerText =
            `${data.name}, ${data.sys.country}`;


        temperature.innerText =
            `${Math.round(data.main.temp)}°C`;


        weatherDescription.innerText =
            data.weather[0].description;

            // Weather Icon

weatherIcon.src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

weatherIcon.alt =
    data.weather[0].description;


// Current Date

const today = new Date();

currentDate.innerText =
    today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });


        humidity.innerText =
            `${data.main.humidity}%`;


        windSpeed.innerText =
            `${(data.wind.speed * 3.6).toFixed(1)} km/h`;


        feelsLike.innerText =
            `${Math.round(data.main.feels_like)}°C`;


        weatherCard.style.display =
            "block";


        defaultMessage.style.display =
            "none";

            loadingMessage.style.display =
    "none";


    } catch (error) {

        weatherCard.style.display =
            "none";


        defaultMessage.style.display =
            "none";

            loadingMessage.style.display =
    "none";


        errorMessage.innerText =
            "City not found. Please enter a valid city name.";

    }

}