var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      CityNot: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        CityNot: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false, CityNot: true});
      console.log(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location,CityNot} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(CityNot){
        return <h3>Error - cannot find this city</h3>;
      }
      else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm searchWeather={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
