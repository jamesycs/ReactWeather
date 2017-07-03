var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h3>{location}</h3>
//         <h3>{temp}</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location, err} = props;
  return (
      <div>
        <h3>{location}</h3>
        <h3>{temp}</h3>
      </div>
    );
};
module.exports = WeatherMessage;
