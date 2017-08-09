require('./api/data/db.js');
//require('./api/config/express.config')(app);

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//////mail

//var favicon = require('static-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');



var session = require('express-session')
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');
//////mail






var routes = require('./api/routes');

require('dotenv').config({silent: true});

// Define the port to run on
//app.set('port', 3000);

var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
app.set('port', port);
// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

//////mail

//app.use(favicon());
//app.use(logger('dev'));
app.use(cookieParser());
app.use(session({ secret: 'session secret key' }));
app.use(passport.initialize());
app.use(passport.session());




//Uploading Section



// Add some routing
app.use('/api', routes);


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

/*server.listen(port, function() {
  // eslint-disable-next-line
  console.log('Server running on port: %d', port);
});
*/