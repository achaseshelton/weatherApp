var cityDiv = document.getElementById("city");
var kelvinDiv = document.getElementById("kelvin");
var celciusDiv = document.getElementById("celcius");
var farenheitDiv = document.getElementById("celcius");
var conditionsDiv = document.getElementById("conditions");
var container2Div = document.getElementById("container2");
var container3Div = document.getElementById("container3");
var container4Div = document.getElementById("container4");
var errorDiv = document.getElementById("error");
var imageDiv = document.getElementById("image");

function setZipCode(value) {
    zipCode = value
    var api = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=4af16e039a66300f9ce07ec031c6035e";
}

function start() {
    errorDiv.style.display = "none";
    container2Div.style.display = "none";
    container3Div.style.display = "none";
    container4Div.style.display = "none";
}

function updateWeather() {
    errorDiv.style.display = "none";
    container2Div.style.display = "block";
    container3Div.style.display = "block";
    container4Div.style.display = "block";
    cityDiv.innerText = place;
    kelvinDiv.innerText = temperature;
    celciusDiv.innerText = Math.round(temperature - 273.15);
    farenheitDiv.innerText = Math.round(((temperature - 274.15) * 1.8) + 32);
}

function wrongZip() {
    container2Div.style.display = "none";
    container3Div.style.display = "none";
    container4Div.style.display = "none";
    errorDiv.style.display = "block";
}


const axios = require('axios');

// Make a request for a user with a given ID
axios.get(api)
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

  document.onload = start;
