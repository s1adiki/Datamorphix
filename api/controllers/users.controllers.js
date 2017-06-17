var mongoose = require('mongoose');
var User     = mongoose.model('User');
var bcrypt   = require('bcrypt-nodejs');
var jwt      = require('jsonwebtoken');
//var fs       = require("fs");

module.exports.register = function(req, res) {
  console.log('registering user');

  var username = req.body.username;

  var name = req.body.name;
  var password = req.body.password;
  var email= req.body.email;

  User.create({
    username: username,
    name: name,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    email: email
  }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      res.status(201).json(user);
    }
  });
};

module.exports.login = function(req, res) {
  console.log('logging in user');
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if(!user){
        //console.log('sss')
        res.status(401).json( {success: false, data:'Unauthorized'});
      }
      else{

      if (bcrypt.compareSync(password, user.password)) {
        console.log('User found', user);
        var token = jwt.sign({ username: user.username}, 's3cr3t', { expiresIn: 3600 });
        res.status(200).json({success: true, token: token});
      } else {
        res.status(401).json('Unauthorized');
      }
    }
    }
  });
};

/*module.exports.userdata = function(req, res) {
  //var username = req.params.username;
  username =req.user;
  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).json(user);
    }
  });
};*/

module.exports.submiturl = function(req, res) {
  var username = req.user;
  //var username= req.user;
  console.log('submitting...');
  var url = req.body.url;
  console.log(url);
  console.log(username);
  

  User.update({
    username: username
  },{ $push: { url: url }}, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('url submitted', user);
      res.status(201).json(user);
    }
  });
};


module.exports.json = function(req, res) {
  var username = req.user;
  //var username= req.user;
  console.log('submitting...JSON');
  //var url = req.body.url;
  //console.log(url);
  var personal_banking = req.body.personal_banking;
  console.log(personal_banking);
  console.log(username);
  

  User.update({
    username: username
  /*},{ $push: { personal_banking: personal_banking }}, function(err, user) {*/
  },{ personal_banking: personal_banking }, function(err, user) {  
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('url submitted', user);
      res.status(201).json(user);
    }
  });
};



/*module.exports.getdata = function(req, res) {
  var username = req.user;
  var password;
  //var username= req.user;
 
  User.findOne({
    username: username
  }).exec(function(err, user) {

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {     
        password=bcrypt.hashSync(user.password);
      
        console.log('User found', user);
        var token = jwt.sign({ username: user.username}, 's3cr3t', { expiresIn: 3600 });
        res.status(200).json({success: true, token: token, username: username, password: password });
       
  
    }
  });
  });
};*/



module.exports.authenticate = function(req, res, next) {
  var headerExists = req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split(' ')[1]; //--> Authorization Bearer xxx
    jwt.verify(token, 's3cr3t', function(error, decoded) {
      if (error) {
        console.log(error);
        res.status(401).json('Unauthorized');
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};
