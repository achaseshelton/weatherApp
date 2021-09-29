const axios = require('axios');

// Make a request for a user with a given ID
axios.get("https://api.openweathermap.org/data/2.5/weather?zip=40515&appid=4af16e039a66300f9ce07ec031c6035e")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
