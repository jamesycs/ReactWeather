var axios = require('axios');

//make a constant variable:
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
           
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error("Cannot find the city");
      } else {
        // debugger;
        return res.data.main.temp;
        
      }
    }, function (res) {
      throw new Error("Cannot find the city");
    });
  }
}