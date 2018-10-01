var expressApp = require('express')(),
    bodyParser = require('body-parser');

var createError = require('http-errors');
var path = require('path');
var ejs = require('ejs');
var express = require('express');
var mongoose = require('./models/db');




let http = require('http').Server(expressApp);

let socketio = require('socket.io')(http);

var app = expressApp;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// view engine setup
app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var userRouter = require('./routes/ChatRoutes');

var socketConfig = require('./config/SocketConfig')(socketio);


app.use('/', indexRouter);
app.use('/users', userRouter);


var port = process.env.PORT || 8000;
http.listen(port, function () {
    console.log('Api running on PORT: ' + port);
});
