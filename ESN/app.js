var express = require('express');
var path = require('path');
var logger = require('morgan');
var port = 3000;
var app = express();

app.use(logger('dev'));

// Setup static folder to serve angular app
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
	console.log("Server is listening on port " + port);
});

module.exports = app;
