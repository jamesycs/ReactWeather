var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) =>{
  return (
      <div className="text-center">
         <h3>Welcome!</h3>
        <p>This is a weather Application build on React</p>
      </div>

    );
};

module.exports = About;
