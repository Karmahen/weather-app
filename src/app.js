//Feature 1 - week 4
let now = new Date();
let h3 = document.querySelector("h3");
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${hours}:${minutes}`;

function showTemperature(response) {
  document.querySelector("#search-text-input").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "8e7cabd0ffecb3bd7e672c74fcc169d0";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

/*Feature 3* from week 4
/*
function changeCelsius() {
  let currentCelsius = document.querySelector("#temperature");
  currentCelsius.innerHTML = 25;
}
let clickCelsius = document.querySelector("#celsius-link");
clickCelsius.addEventListener("click", changeCelsius);

function changeFahrenheit() {
  let currentFahrenheit = document.querySelector("#temperature");
  currentFahrenheit.innerHTML = 77;
}
let clickFahrenheit = document.querySelector("#fahrenheit-link");
clickFahrenheit.addEventListener("click", changeFahrenheit);
*/
