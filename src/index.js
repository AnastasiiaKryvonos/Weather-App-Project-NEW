function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "4aba851aa613a0fec35ta21fbb5o400f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "4aba851aa613a0fec35ta21fbb5o400f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
 <div class="row">
            <div class="col-2">
              <div class="weather-forecast-date">${formatDay(day.time)}</div>
              <div><img src="${
                day.condition.icon_url
              }" class="weather-forecast-icon" /></div>
              <div class="weather-forecast-temperature">
                <span class="weather-forecast-temp-max">${Math.round(
                  day.temperature.maximum
                )}°C</span>
                <span class="weather-forecast-temp-min">${Math.round(
                  day.temperature.minimum
                )}°C</span>
              </div>
            </div>
          </div>
`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");

// Define variables to store original colors
let originalBodyColor;
let originalWeatherAppColor;
let originalSearchFormInputColor;
let originalSearchFormButtonBackgroundColor;
let originalSearchFormButtonColor;
let originalFaSolidBackgroundColor;
let originalFaSolidColor;
let originalDegreeBackgroundColor;
let originalDegreeColor;
let originalWeatherAppDataColor;
let originalWeatherForecastDateColor;

// Function to store original colors
function storeOriginalColors() {
  originalBodyColor = document.body.style.background;
  originalWeatherAppColor =
    document.querySelector(".weatherApp").style.backgroundColor;
  originalSearchFormInputColor =
    document.querySelector(".search-form-input").style.backgroundColor;
  originalSearchFormButtonBackgroundColor = document.querySelector(
    ".search-form-button"
  ).style.backgroundColor;
  originalSearchFormButtonColor = document.querySelector(".search-form-button")
    .style.color;
  document.querySelector(".weather-settings").style.backgroundColor;
  originalFaSolidBackgroundColor =
    document.querySelector(".fa-solid").style.backgroundColor;
  originalFaSolidColor = document.querySelector(".fa-solid").style.color;
  originalDegreeBackgroundColor =
    document.querySelector(".degree").style.backgroundColor;
  originalDegreeColor = document.querySelector(".degree").style.color;
  originalWeatherAppDataColor =
    document.querySelector(".weather-app-data").style.backgroundColor;
  originalWeatherForecastDateColor = document.querySelector(
    ".weather-forecast-date"
  ).style.color;
}

// Function to change colors
function changeColors() {
  // Define new colors
  const newBodyColor = "#323643";
  const newWeatherAppColor = "#606470";
  const newSearchFormInputColor = "#323643";
  const newSearchFormButtonBackgroundColor = "#EAEAEA";
  const newSearchFormButtonColor = "#606470";
  const newFaSolidBackgroundColor = "#EAEAEA";
  const newFaSolidColor = "#606470";
  const newDegreeBackgroundColor = "#EAEAEA";
  const newDegreeColor = "#606470";
  const newWeatherAppDataColor = "#323643";
  const newWeatherForecastDateColor = "#EAEAEA";

  // Apply new colors to elements
  document.body.style.background = newBodyColor;
  document.querySelector(".weatherApp").style.backgroundColor =
    newWeatherAppColor;
  document.querySelector(".search-form-input").style.backgroundColor =
    newSearchFormInputColor;
  document.querySelector(".search-form-button").style.backgroundColor =
    newSearchFormButtonBackgroundColor;
  document.querySelector(".search-form-button").style.color =
    newSearchFormButtonColor;
  document.querySelector(".fa-solid").style.backgroundColor =
    newFaSolidBackgroundColor;
  document.querySelector(".fa-solid").style.color = newFaSolidColor;
  document.querySelector(".degree").style.backgroundColor =
    newDegreeBackgroundColor;
  document.querySelector(".degree").style.color = newDegreeColor;
  document.querySelector(".weather-app-data").style.backgroundColor =
    newWeatherAppDataColor;
  document.querySelector(".forecast").style.color = newWeatherForecastDateColor;
}

// Function to revert back to original colors
function revertColors() {
  document.body.style.background = originalBodyColor;
  document.querySelector(".weatherApp").style.backgroundColor =
    originalWeatherAppColor;
  document.querySelector(".search-form-input").style.backgroundColor =
    originalSearchFormInputColor;
  document.querySelector(".search-form-button").style.backgroundColor =
    originalSearchFormButtonBackgroundColor;
  document.querySelector(".search-form-button").style.color =
    originalSearchFormButtonColor;
  document.querySelector(".fa-solid").style.backgroundColor =
    originalFaSolidBackgroundColor;
  document.querySelector(".fa-solid").style.color = originalFaSolidColor;
  document.querySelector(".degree").style.backgroundColor =
    originalDegreeBackgroundColor;
  document.querySelector(".degree").style.color = originalDegreeColor;
  document.querySelector(".weather-app-data").style.backgroundColor =
    originalWeatherAppDataColor;
  document.querySelector(".weather-forecast-date").style.color =
    originalWeatherForecastDateColor;
}

// Adding event listener to the button for changing colors
document.querySelector(".fa-solid").addEventListener("click", function () {
  if (document.body.style.background === originalBodyColor) {
    changeColors();
  } else {
    revertColors();
  }
});

// Store original colors when the page loads
window.addEventListener("load", function () {
  storeOriginalColors();
});
