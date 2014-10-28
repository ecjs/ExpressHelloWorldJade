// declare express, app as express and use env port or 3000
var express = require("express"), app = express(), port = process.env.PORT || 3000;
// set the view engine to jade
app.set('view engine', 'jade');
// set the static resource directory to /public
app.use(express.static(__dirname + '/public'));
// set the main route, rendering using jade
app.get("/", function(req, res) {
  res.render('index', { title: 'Node/Express/Jade Hello World!', message: 'Node/Express/Jade Hello World!', email: 'mark@mjharrell.com', twitter: 'mark_harrell'});
});

app.get("/surprise", function(req, res) {
  res.render('surprise', { title: 'Node/Express/Jade/Static Hello World!', message: 'Surprise!', email: 'mark@mjharrell.com', twitter: 'mark_harrell'});
});

//start the server
var server = app.listen(3000, function (req,res) {
  var listening = server.address().port;
  console.log("Now listening on port " + listening);
});
