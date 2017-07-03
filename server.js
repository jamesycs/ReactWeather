var express = require('express');

// Create our app
var app = express();

app.use(function (req,res,next){
    if(req.headers['x-forwarded-proto']==='http'){
      next();
    }else {
      res.redirect('http://'+req.hostname + req.url)
    }
});
app.use(express.static('public'));


app.listen(process.env.PORT, function () {
  console.log('Express server has started');
});
