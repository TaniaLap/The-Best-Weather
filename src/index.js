function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#nowday");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// The weather

function showTemperature(response) {
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#current-city-name").innerHTML = response.data.name;
  document.querySelector("#temp-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#min").innerHTML = `min ${Math.round(
    response.data.main.temp_min
  )}°C`;
  document.querySelector("#max").innerHTML = `max ${Math.round(
    response.data.main.temp_max
  )}°C`;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  citySearch(city);
}

function citySearch(city) {
  let apiKey = "e3790bfec16258b192d5a2523c9343bb";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

// Location

function showPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  let apiKey = "e3790bfec16258b192d5a2523c9343bb";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.lat}&lat=${coordinates.lon}&cnt=7&key=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}
function retrievePosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let buttonCurrent = document.querySelector("#current-location-button");
buttonCurrent.addEventListener("click", retrievePosition);

citySearch("Dresden");

function showTemper(event) {
  event.preventDefault();
  let temper = document.querySelector("#temperature");
  temper.innerHTML = 80;
}

let linkTemp = document.querySelector("#fahrenheit-link");
linkTemp.addEventListener("click", showTemper);

function showCelsius(event) {
  event.preventDefault();
  let temper = document.querySelector("#temperature");
  temper.innerHTML = 27;
}

let linkCels = document.querySelector("#celsius-link");
linkCels.addEventListener("click", showCelsius);
