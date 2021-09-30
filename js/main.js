var cityDiv = document.getElementById("city");
var kelvinDiv = document.getElementById("kelvin");
var celciusDiv = document.getElementById("celcius");
var farenheitDiv = document.getElementById("farenheit");
var conditionsDiv = document.getElementById("conditions");
var container2Div = document.getElementById("container2");
var container3Div = document.getElementById("container3");
var container4Div = document.getElementById("container4");
var errorDiv = document.getElementById("error");
var imageDiv = document.getElementById("image");
var conditionsDiv = document.getElementById("conditions");
var buttonDiv = document.getElementById("button");
var zipCode = null;
var searchBoxDiv = document.getElementById("searchBox");


function start() {
    errorDiv.style.display = "none";
    container2Div.style.display = "none";
    container3Div.style.display = "none";
    container4Div.style.display = "none";
    imageDiv.style.display = "none";
}

// function updateWeather() {
//     errorDiv.style.display = "none";
//     container2Div.style.display = "block";
//     container3Div.style.display = "block";
//     container4Div.style.display = "block";
//     cityDiv.innerText = place;
//     kelvinDiv.innerText = temperature;
//     celciusDiv.innerText = Math.round(temperature - 273.15);
//     farenheitDiv.innerText = Math.round(((temperature - 274.15) * 1.8) + 32);
// }

// function wrongZip() {
//     container2Div.style.display = "none";
//     container3Div.style.display = "none";
//     container4Div.style.display = "none";
//     imageDiv.style.display = "none";
//     errorDiv.style.display = "block";
// }

// Make a request for a user with a given ID
searchBoxDiv.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});
buttonDiv.addEventListener("click", axiosCall);
function axiosCall() {
    zipCode = document.getElementById("searchBox").value;
    axios.get("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=4af16e039a66300f9ce07ec031c6035e")
        .then(function (response) {
            // handle success
            let temperature = response.data.main.temp;
            let place = response.data.name;
            let weatherType = response.data.weather[0].description;
            console.log(response);
            console.log(temperature);
            console.log(place);
            console.log(weatherType);
            errorDiv.style.display = "none";
            container2Div.style.display = "block";
            container3Div.style.display = "block";
            container4Div.style.display = "block";
            imageDiv.style.display = "block";
            cityDiv.innerText = place;
            kelvinDiv.innerText = Math.round(temperature) + " °K";
            celciusDiv.innerText = Math.round(temperature - 273.15) + " °C";
            farenheitDiv.innerText = Math.round(((temperature - 274.15) * 1.8) + 32) + " °F";
            conditionsDiv.innerText = weatherType;
            if (temperature > 294) {
                image.src = "./img/beach.jpg";
            };
            if ((temperature < 293) && (temperature > 283)) {
                image.src = "./img/lightjacket.jpg";
            };
            if (temperature < 282) {
                image.src = "./img/heavyjacket.jpg"
            };
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            container2Div.style.display = "none";
            container3Div.style.display = "none";
            container4Div.style.display = "none";
            imageDiv.style.display = "none"
            errorDiv.style.display = "block";
        })
}

// document.onload = start;

