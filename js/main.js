var cityDiv = document.getElementById("city");
var kelvinDiv = document.getElementById("kelvin");
var celciusDiv = document.getElementById("celcius");
var farenheitDiv = document.getElementById("celcius");
var conditionsDiv = document.getElementById("conditions");
var mainDiv = document.getElementById("main");
var errorDiv = document.getElementById("error");

var zipCode =
var api = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=4af16e039a66300f9ce07ec031c6035e";

function start() {
    mainDiv.style.display = "none";
    errorDiv.style.display = "none";
}

function updateWeather() {
    errorDiv.style.display = "none";
    mainDiv.style.display = "block";
    cityDiv.innerText = place;
    kelvinDiv.innerText = temperature;
    celciusDiv.innerText = Math.round(temperature - 273.15);
    farenheitDiv.innerText = Math.round(((temperature - 274.15) * 1.8) + 32);
    conditionsDiv.innerText = 
}

function wrongZip() {
    mainDiv.style.display = "none";
    errorDiv.style.display = "block";
}

const axios = require('axios');

// Make a request for a user with a given ID
axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40515&appid=4af16e039a66300f9ce07ec031c6035e")
  .then(function (response) {
    // handle success
    let temperature = response.data.main.temp;
    let place = response.data.name;
    console.log(temperature);
    console.log(place);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
