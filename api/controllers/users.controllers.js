var mongoose = require('mongoose');
var User     = mongoose.model('User');
//var User_mngmnt     = mongoose.model('User_mngmnt');
var bcrypt   = require('bcrypt-nodejs');
var jwt      = require('jsonwebtoken');
var PythonShell = require("python-shell");
const nodemailer = require('nodemailer');
var fs       = require("fs");
var sleep = require('sleep');
var open = require("open");
var browser = require("detect-browser");
//var execSync = require('exec-sync');

module.exports.register = function(req, res) {
  console.log('registering user');

  var username = req.body.username;

  var name = req.body.name;
  var password = req.body.password;
  var email= req.body.email;
  var organization= req.body.organization;
  var contact = req.body.contact;
  var plan = req.body.plan;

  User.create({
    username: username,
    
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    email: email,
    contact:contact,
    organization:organization,
    plan: plan
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


module.exports.register_update = function(req, res) {
  console.log('profile updating user');

  var username = req.body.username;

  var name = req.body.name;
  var password = req.body.password;
  var email= req.body.email;
  var organization= req.body.organization;
  var contact = req.body.contact;


  User.update({
    username: username    
  },{email: email,
    contact:contact,
    organization:organization}, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      
      res.status(201).json(user);
    }
  });
};


var _addBot = function (req, res, user) {
  user.bot_registered.push({
    bot_name : req.body.bot_name,
    number_instance : req.body.number_instance
    
  });

  user.save(function(err, user) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(user.bot_registered[user.bot_registered.length - 1]);
    }
  });

};




module.exports.register_delete_bot = function(req, res) {
  //var username = req.user;
  var username = req.body.username;
  var id ='';

  //console.log('POST review to hotelId', re);

    User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      id=user._id;
      console.log(user);
      for(var i=0;i<user.bot_registered.length;i++){
        console.log(user.bot_registered.length);
        console.log(user.bot_registered[i].bot_name);
        User.update({username: req.body.username },{$pull: { bot_registered  : { bot_name : user.bot_registered[i].bot_name } } },{multi: true}).exec(function(err, user1) {
    console.log(user1);
    
      
    });
       
      }
      res
      .status(200)
      .json(user);
    }
  });
};

module.exports.register_bot = function(req, res) {
  //var username = req.user;
  var username = req.body.username;
  var id ='';

  //console.log('POST review to hotelId', re);

    User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      id=user._id;
      console.log(user);
     
    User
    .findById(id)
    .select('bot_registered')
    .exec(function(err, user) {
      var response = {
        status : 200,
        message : user
      };
      if (err) {
        console.log("Error finding User");
        response.status = 500;
        response.message = err;
      } else if(!user) {
        console.log("User is not found in database", username);
        response.status = 404;
        response.message = {
          "message" : "User not found " + username
        };
      }
      if (user) {
        _addBot(req, res, user);
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });
    }
});




};

module.exports.login_validation = function(req, res) {
  var username = req.user;
  
  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if(!user){
        //console.log('sss')
        res.status(204).json( {success: false, data:'Unauthorized'});
      }
      else{
      res.status(200).json({success: true, username: username});
    }
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
        res.status(204).json( {success: false, data:'Unauthorized'});
      }
      else{

      if (bcrypt.compareSync(password, user.password)) {
        //console.log('User found', user);
        var token = jwt.sign({ username: user.username}, 's3cr3t', { expiresIn: 3600 });
        res.status(200).json({success: true, token: token});
      } else {
        res.status(204).json('Unauthorized');
      }
    }
    }
  });
};

module.exports.pswrd_change_user = function(req, res) {
  
  var username = req.user;
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
        //console.log('User found', user);
        //var token = jwt.sign({ username: user.username}, 's3cr3t', { expiresIn: 3600 });
        res.status(200).json({success: true});
      } else {
        res.status(201).json('Unauthorized');
      }
    }
    }
  });
};


module.exports.password = function(req, res) {
  console.log('logging in passwrd');
  var email = req.body.email;
  console.log(email);

  User.findOne({
    email: email
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log(user)
      res.status(200).json(user);
    }
  });
};


module.exports.frget_email = function(req, res) {
  console.log('sending e-mail');
  //var email = req.body.email;
  let mailOptions={
    
    from : 'rockingmanoj5674@gmail.com',
    to : 'mekapotulamanoj5674@gmail.com' ,
    subject : req.body.subject ,
    text :'The Customer Mail  : '+ req.body.from +'\nThe Customer Contact  : '+ req.body.contact +'\nThe Customer Organization  : '+ req.body.Organization +'\nCustomer Message : ' +  req.body.text+'\nNeeds Request On  : ' +  req.body.bot_request
  }; 
  console.log(mailOptions);
  let smtpTransport = nodemailer.createTransport({
    //service: "Gmail",
    //host: "smtp.gmail.com",
    host: 'smtp.gmail.com',
    port : 465,
   // port (TLS): 587,
    secure: true,
    tls:{rejectUnauthorized:false},
    //TLS/SSL required: 'yes'
    auth: {
        user: "rockingmanoj5674@gmail.com",
        pass: "9032466393"
    }
});
smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
      });


smtpTransport.close();
};




module.exports.register_auth = function(req, res) {
  //var username = req.params.username;
  //var username =req.user;
  var username = req.body.username;
  console.log(username);
  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log(user)
      res.status(200).json(user);
    }
  });
};

var _addusermngmnt = function (req, res, user) {
  user.user_management.push({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    empId : req.body.empId,
    Department : req.body.Department,
    Role : req.body.Role,
    manager_ID : req.body.manager_ID,
    bot_info : req.body.bot_info,
    bot_service : req.body.bot_service,
    bot_help : req.body.bot_help
  });

  user.save(function(err, user) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      console.log(user);
      res
        .status(200)
        .json(user.user_management[user.user_management.length - 1]);
    }
  });

};



module.exports.register_auth_mngmnt = function(req, res) {
  var username = req.user;
  //var username = req.body.username;
  var email = req.body.email;
  var empId = req.body.empId;
  var id ='';
  var set_flag=true;
  var set_empId_flg = true;
  var set_emailId_flg = true;

  //console.log('POST review to hotelId', re);

    User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      id=user._id;
      console.log(id);
      var cnt=user.user_management.length;
       console.log(cnt);


      

/*      User_mngmnt
    .findOne({email:email}).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      console.log(user);
}

});*/

  for(var i=0;i<cnt;i++){
    if(user.user_management[i].email===email && user.user_management[i].empId===empId){
      set_flag=false;
    }
    if(user.user_management[i].email===email ){
      set_emailId_flg=false;
    }
    if(user.user_management[i].empId===empId ){
      set_empId_flg=false;
    }
    
  }

    User
    .findById(id)
    .select('user_management')
    .exec(function(err, user) {
      var response = {
        status : 200,
        message : user
      };
      if (err) {
        console.log("Error finding User");
        response.status = 500;
        response.message = err;
      } else if(!user) {
        console.log("User is not found in database", username);
        response.status = 404;
        response.message = {
          "message" : "User not found " + username
        };
      }
      if (user) {
          if(set_flag && set_emailId_flg && set_empId_flg){
        _addusermngmnt(req, res, user);
      }
      else{
        if(!set_flag){
        res.status(201).json({success: false, message : 'E-mail and EmployeeId has already taken'});
      }
      else if(!set_emailId_flg){
        res.status(201).json({success: false, message : 'E-mail has already taken'});
      }
      else if(!set_empId_flg){
        res.status(201).json({success: false, message : 'EmployeeId has already taken'});
      }
      }
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });

/*  else{
    response.status = 501;
        response.message = {
          "message" : "User already exists " + username
        };
  }
*/    }
});




};








module.exports.register_auth_mngmnt_bot = function(req, res) {
  var username = req.user;
 // var email = req.body.email;
  var id ='';
  var usr_array =[];

User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      console.log(user);
      var cnt=user.user_management.length;
       console.log(cnt);
       console.log(user.user_management)
       
        /*.data(user.user_management);*/
        /*.json({user.bots_authorized});*/

  for(var i=0;i<cnt;i++){
    if(user.user_management[i]){
      usr_array.push(user.user_management[i]);
         }

  }
  console.log(usr_array);
  res
        .status(200)
        .json({Array:usr_array, count:cnt});

}
});

};


var _deleteuserbotmngmnt = function (req, res, user) {
  User.update({username:req.user},{$pull: { user_management  : { empId : req.body.empId } } },{multi: true}).exec(function(err, user1) {
    console.log(user1);
    res
      .status(200)
      .json(user1);
      
    });
//console.log(req.body.empId);
 /* user.save(function(err, user) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(user.user_management);
    }
  });*/

};


module.exports.delete_user_management = function(req, res) {
  var username = req.user;
  //var empId1 = req.body.empId;
  var email1 = req.body.email;
  var id ='';

//User.update({},{$pull: {"user_management": {$in  :[{"email":email} , {"empId":empId}] }} },{"multi" : true})
//User.update({_id: "5978e0c372b39a21ec66f8f6"},{$pull: {user_management: {$in  :[{email:req.body.email} ] }} },{"multi" : false});

/*User.deleteOne({"username":"mk"}).exec(function(err, user) {
  console.log(user);
});*/
User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      console.log(user);
      var cnt=user.user_management.length;
      console.log(cnt);

       //User.update({"_id": "5978e0c372b39a21ec66f8f6"},{$pull: {"user_management": {$in  :[{"email":email} , {"empId":empId}] }} },{"multi" : true})

      _deleteuserbotmngmnt(req, res, user);

       //console.log(user.user_management);
      //console.log(req.body.email);
      }
    });
/*User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      console.log(user);
      var cnt=user.user_management.length;
       console.log(cnt);
       //console.log(user.user_management);
       console.log(req.body.email);


  for(var i=0;i<cnt;i++){
    if(user.user_management[i].email===email){
      console.log(email);
      var next= User.user_management
      var user = {
        email:email
      }
/*      User.update({
    username: username
  //},{ $push: { url: url }}, function(err, user) {
  },{ url: url }, function(err, user) {
     User.user_management.delete({
    username: username
  }).exec(function(err, user) {

      User.user_management.update({
         email : req.body.email},{$pull:{email : req.body.email}}, function(err, user) {
    console(user);
  });
      //_deleteuserbotmngmnt(req, res, user);
         }

  }

}
});

*/
};



module.exports.chng_password_email = function(req, res) {
  console.log('sending e-mail');
  //var email = req.body.email;
  let mailOptions={
    
    from : 'rockingmanoj5674@gmail.com',
    to : req.body.to ,
    subject : req.body.subject ,
    text :req.body.text+  req.body.host+'/#/password?email='+req.body.to
  }; 
  console.log(mailOptions);
  let smtpTransport = nodemailer.createTransport({
    //service: "Gmail",
    //host: "smtp.gmail.com",
    host: 'smtp.gmail.com',
    port : 465,
   // port (TLS): 587,
    secure: true,
    tls:{rejectUnauthorized:false},
    //TLS/SSL required: 'yes'
    auth: {
        user: 'rockingmanoj5674@gmail.com',
        pass: '9032466393'
    }
});
smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
      });

smtpTransport.close();

};


module.exports.register_email = function(req, res) {
  console.log('sending registration e-mail');
  //var email = req.body.email;
  let mailOptions={
    
    from : 'rockingmanoj5674@gmail.com',
    to : req.body.email ,
    subject : 'New Registered Customer',
    text :'The Customer Mail : '+ req.body.email +'\nCustomer Username : ' +  req.body.username +'\nOrganisation : ' +  req.body.organization+'\nRegistered BOTS : ' +  req.body.registered_list
  }; 
  console.log(mailOptions);
  let smtpTransport = nodemailer.createTransport({
    //service: "Gmail",
    //host: "smtp.gmail.com",
    host: 'smtp.gmail.com',
    port : 465,
   // port (TLS): 587,
    secure: true,
    tls:{rejectUnauthorized:false},
    //TLS/SSL required: 'yes'
    auth: {
        user: 'rockingmanoj5674@gmail.com',
        pass: '9032466393'
    }
});
smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
      });

smtpTransport.close();

};


module.exports.register_update_email = function(req, res) {
  console.log('sending update e-mail');
  //var email = req.body.email;
  let mailOptions={
    
    from : 'rockingmanoj5674@gmail.com',
    to : req.body.email ,
    subject : 'Profile Updated',
    text :'The Customer Mail : '+ req.body.email +'\nCustomer Username : ' +  req.body.username +'\nOrganisation : ' +  req.body.organization+'\nRegistered BOTS : ' +  req.body.registered_list
  }; 
  console.log(mailOptions);
  let smtpTransport = nodemailer.createTransport({
    //service: "Gmail",
    //host: "smtp.gmail.com",
    host: 'smtp.gmail.com',
    port : 465,
   // port (TLS): 587,
    secure: true,
    tls:{rejectUnauthorized:false},
    //TLS/SSL required: 'yes'
    auth: {
        user: 'rockingmanoj5674@gmail.com',
        pass: '9032466393'
    }
});
smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
      });

smtpTransport.close();

};



module.exports.chng_password = function(req, res) {
  //var username = req.params.username;
  //var username =req.user;
  var email = req.body.email;
  var password = req.body.old_password;
  var new_password = req.body.password;

   User.findOne({
    email: email
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
        //console.log('User found', user);
        //var token = jwt.sign({ username: user.username}, 's3cr3t', { expiresIn: 3600 });
          password = bcrypt.hashSync(new_password, bcrypt.genSaltSync(10));
  //console.log(username);
 User.update({
    email: email
  //},{ $push: { url: url }}, function(err, user) {
  },{ password: password }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('password changed', user);
      res.status(200).json(user);
    }
  });
        
      } else {
        res.status(201).json('Unauthorized');
      }
    }
    }
  });


};


module.exports.chng_password_update = function(req, res) {
  //var username = req.params.username;
  var username =req.user;
  //var email = req.body.email;
  var password = req.body.password;
  password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  //console.log(username);
 User.update({
    username: username
  //},{ $push: { url: url }}, function(err, user) {
  },{ password: password }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('password changed', user);
      res.status(201).json(user);
    }
  });
};



module.exports.scrape = function(req, res) {
  //var username = req.params.username;
  var username =req.user;
  //var username = req.body.username;
  console.log(username);
  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log(user)
      res.status(200).json(user);
    }
  });
};


module.exports.submiturl = function(req, res) {
  var username = req.user;
  //var username= req.user;
  console.log('submitting...');
  var url = req.body.url;
  console.log(url);
  console.log(username);
  

  User.update({
    username: username
  //},{ $push: { url: url }}, function(err, user) {
  },{ url: url }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('url submitted', user);
      res.status(201).json(user);
    }
  });
};



module.exports.call_python = function(req, res, next) {
  var username = req.user;
  //var username= req.user;
  console.log('submitting...');
  var url = req.body.url;
  console.log(url);
  console.log(username);

   // var user = execSync('python test2.py');
  var pyshell = new PythonShell("test2.py");
  //var url = req.body.
  pyshell.send("https://www.sbi.co.in/portal/web/home/sitemap");
  pyshell.on('message', function (message) {
  console.log(message);
});
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});
sleep.sleep(10);
  next();
};

module.exports.store_script = function(req, res) {
  var username = req.user;
  var personal_banking = req.body.personal_banking;
  //var username= req.user;
  console.log('submitting...script');
  //var url = req.body.url;
  //console.log(url);
  console.log(username);

  User.update({
    username: username
  /*},{ $push: { personal_banking: personal_banking }}, function(err, user) {*/
  },{ personal_banking: personal_banking }, function(err, user) {  
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('script submitted', user);
      res.status(201).json(user);
    }
  });
};


module.exports.get_script = function(req, res) {
  var username = req.user;
  //var personal_banking = req.body.personal_banking;
  //var username= req.user;
  //console.log('submitting...script');
  //var url = req.body.url;
  //console.log(url);
  console.log(username);

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log(user)
       var test_html = '<html><body>'+user.personal_banking+'</body></html>';

  fs.writeFile('test_html.html', test_html, function (err) {
    if (err) 
        return console.log(err);
    });
  
      //open('test_html.html',"firefox", "__blank");
      //open('test_html.html',"chrome", "__blank");
      res.status(200).json(user);
    }
  });
 };


module.exports.get_script_deploy = function(req, res) {
  var username = req.user;
  //var personal_banking = req.body.personal_banking;
  //var username= req.user;
  console.log('submitting...script');
  //var url = req.body.url;
  //console.log(url);
  console.log(username);

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log(user);
      res.status(200).json(user);
    }
  });
 };








module.exports.scrape_data = function(req, res) {
  


var obj = fs.readFileSync('Links.json', 'utf8');
 //var file = document.getElementById("myFileInput").files[0];
    var content;
      
    if (obj) {
      //var filename = file.name;
        //var ext = getExtension(filename);
       // if(ext==='json'){
          //vm.error = '';
          /*var aReader = new FileReader();
          aReader.readAsText(file, "UTF-8");
          aReader.onload = function (evt) {*/
            content= obj;
            /*$scope.fileContent = content; 
            $scope.fileName = document.getElementById("myFileInput").files[0].name;
            $scope.fileSize = document.getElementById("myFileInput").files[0].size;*/
            /*var user = {
              personal_banking: content
            };*/
            /*$http.post('/api/users/json', user).then(function(result_json) {
            console.log(result_json);
            console.log("done");*/
            //vm.message = 'Successfully Uploaded...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
           /* vm.error = '';
            $location.path('/scrape');
            }).catch(function(error) {

              console.log(error);
    
            });*/
        /*};
        aReader.onerror = function (evt) {
            console.log(aReader.onerror);
        };*/
        //}
       /* else
        {
          vm.error='Please Upload JSON File Only.';
        }*/
      }
     /* else{
        vm.error='Please Upload File.'
      }*/

  






  var username = req.user;
  //var username= req.user;
  console.log('submitting...JSON');
  //var url = req.body.url;
  //console.log(url);
  var personal_banking = content;
  console.log(personal_banking);
  console.log(username);
  

  User.update({
    username: username
  /*},{ $push: { personal_banking: personal_banking }}, function(err, user) {*/
  },{ site_info: personal_banking }, function(err, user) {  
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
  var pyshell = new PythonShell("test2.py");
  //var url = req.body.
  pyshell.send("https://www.sbi.co.in/portal/web/home/sitemap");
  pyshell.on('message', function (message) {
  console.log(message);
});
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});


  






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


var _addbotscript = function (req, res, user) {
  
  //User.update({},{$pull: { bots_saved  : { bot_name : name } } },{multi: false});
 // User.update({},{$push: { bots_saved  : { bot_name: req.body.bot_name,   bot_user_name: req.body.bot_user_name,   bot_script : req.body.bot_script  } } });



  user.bots_saved.push({
   bot_name: req.body.bot_name,
   bot_user_name: req.body.bot_user_name,
   bot_script : req.body.bot_script
  });

  user.save(function(err, user) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(user.bots_saved);
    }
  });

};


var _updateuser = function (req, res, user) {
  
  //User.update({},{$pull: { bots_saved  : { bot_name : name } } },{multi: false});
 // User.update({},{$push: { bots_saved  : { bot_name: req.body.bot_name,   bot_user_name: req.body.bot_user_name,   bot_script : req.body.bot_script  } } });



user.user_management.push({
   firstname: req.body.firstname,
   lastname: req.body.lastname,
   email : req.body.email,
   empId: req.body.empId,
   Department: req.body.Department,
   Role : req.body.Role,
   manager_ID: req.body.manager_ID,
   bot_info: req.body.bot_info,
   bot_service : req.body.bot_service,
   bot_help : req.body.bot_help
  });

  user.save(function(err, user) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(user.bots_saved);
    }
  });

};


module.exports.edit_user_updated = function(req, res) {

  var username = req.user;
  /*var bot_name = req.body.bot_name;
  var bot_user_name = req.body.bot_user_name;
  var bot_script = req.body.bot_script;*/
  var id ='';
  var set_flag=true;
  var empId_value= req.body.empId;
  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);

    } else {
      id=user._id;
      console.log(id);

      //var cnt=user.user_management.length;
      //console.log(cnt);


      



/*  for(var i=0;i<cnt;i++){
    if(user.user_management[i].email===email){
      set_flag=false;
    }
    
  }*/
    for(var i=0;i<user.user_management.length;i++){
      if(user.user_management[i].empId===empId_value){
        User.update({username:username},{$pull: { user_management  : { empId : empId_value } } },{multi: true}).exec(function(err, user1) {
    console.log(user1);
    
      
    });
        console.log("sss");
        
      }
    }
    if(set_flag){
    User
    .findById(id)
    .select('user_management')
    .exec(function(err, user) {
      var response = {
        status : 200,
        message : user
      };
      if (err) {
        console.log("Error finding User");
        response.status = 500;
        response.message = err;
      } else if(!user) {
        console.log("User is not found in database", username);
        response.status = 404;
        response.message = {
          "message" : "User not found " + username
        };
      }
      if (user) {
         /* if(set_flag){*/
        _updateuser(req, res, user);
      /*}
      else{
        res.status(201).json({success: false, message : 'User already taken'});
      }*/
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });
  }

    }
});




};




module.exports.store_bot_script = function(req, res) {

  var username = req.user;
  var bot_name = req.body.bot_name;
  var bot_user_name = req.body.bot_user_name;
  var bot_script = req.body.bot_script;
  var id ='';
  var set_flag=true;
  var name= req.body.bot_name;
  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);

    } else {
      id=user._id;
      console.log(id);
      var cnt=user.user_management.length;
      console.log(cnt);


      



/*  for(var i=0;i<cnt;i++){
    if(user.user_management[i].email===email){
      set_flag=false;
    }
    
  }*/
  for(var i=0;i<user.bots_saved.length;i++){
    if(user.bots_saved[i].bot_name===bot_name){
      User.update({username:username},{$pull: { bots_saved  : { bot_name : name } } },{multi: false}).exec(function(err, user1) {
    console.log(user1);
    
      
    });
    }
  }
    if(set_flag){
    User
    .findById(id)
    .select('bots_saved')
    .exec(function(err, user) {
      var response = {
        status : 200,
        message : user
      };
      if (err) {
        console.log("Error finding User");
        response.status = 500;
        response.message = err;
      } else if(!user) {
        console.log("User is not found in database", username);
        response.status = 404;
        response.message = {
          "message" : "User not found " + username
        };
      }
      if (user) {
         /* if(set_flag){*/
        _addbotscript(req, res, user);
      /*}
      else{
        res.status(201).json({success: false, message : 'User already taken'});
      }*/
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });
  }

    }
});




};


//this is duplicate
module.exports.get_bot_script_saved = function(req, res) {
  var username = req.user;
 // var email = req.body.email;
  var id ='';
  var usr_array =[];

User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      console.log(user);
      var cnt=user.bots_saved.length;
       console.log(cnt);
       console.log(user.bots_saved)
       
        /*.data(user.user_management);*/
        /*.json({user.bots_authorized});*/

  for(var i=0;i<cnt;i++){
    if(user.bots_saved[i]){
      usr_array.push(user.bots_saved[i]);
         }

  }
  console.log(usr_array);
  res
        .status(200)
        .json({Array:usr_array, count:cnt});

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


module.exports.admin_dashboard = function(req, res) {
  //var username = req.params.username;
  var username =req.user;
  //var username = req.body.username;
  console.log(username);
  User.distinct("username").exec(function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if (username ==='admin@admin.com') {
        console.log(user)
        res.status(200).json(user);
      }
      else{
        res.status(201).json({message: 'NOT ADMIN'});
      }
    }
  });
};

module.exports.admin_dashboard_getscript = function(req, res) {
  //var username = req.params.username;
  var usr_array_dash=[];
  var total_count= 0;
  var flg_res = false;
  var data = req.body.data_user;
  console.log('1');
  console.log(data);
  for(var i=0;i<data.length;i++){
    User.findOne({
      username: data[i]
    }).exec(function(err, user) {
      if (err) {
        console.log(err);
        //res.status(400).json(err);
      } else {
        console.log(user);
        var cnt=user.bots_saved.length;
        console.log(cnt);
        if(cnt==='undefined'|| cnt === undefined){
          cnt=0;
        }
         //console.log(user.bots_saved)
         
          /*.data(user.user_management);*/
          /*.json({user.bots_authorized});*/

        for(var i=0;i<cnt;i++){
          if(user.bots_saved[i]){
            //console.log(user.bots_saved[i]);
            usr_array_dash.push(user.bots_saved[i]);
            total_count++;
          }
        }
        console.log(total_count);
        console.log(usr_array_dash);
 

      }
  
    });
    if(i===(data.length-1)){
      flg_res = true;
    }
  }
  if(flg_res===true){
    res.status(200).json({data:usr_array_dash});
  }

};


var _add_user_intgtn_mngmnt = function (req, res, user) {
  user.integration_server.push({
    IP_address : req.body.IP_address,
    dommainName : req.body.dommainName,
    services_requested : req.body.services_requested,
    enterpriseIP : req.body.enterpriseIP,
    enterpriseDomain : req.body.enterpriseDomain,
    accessUser : req.body.accessUser,
    access_password : req.body.access_password,
    dbname : req.body.dbname
  });

  user.save(function(err, user) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      console.log(user);
      res
        .status(200)
        .json(user.integration_server[user.integration_server.length - 1]);
    }
  });

};



module.exports.admin_dashboard_integration_usr_submit = function(req, res) {
  var username = req.user; 

    User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      id=user._id;
      console.log(id);



    User
    .findById(id)
    .select('integration_server')
    .exec(function(err, user) {
      var response = {
        status : 200,
        message : user
      };
      if (err) {
        console.log("Error finding User");
        response.status = 500;
        response.message = err;
      } else if(!user) {
        console.log("User is not found in database", username);
        response.status = 404;
        response.message = {
          "message" : "User not found " + username
        };
      }
      if (user) {
         _add_user_intgtn_mngmnt(req, res, user);
      }
      
      else {
        res
          .status(response.status)
          .json(response.message);
      }
    });

/*  else{
    response.status = 501;
        response.message = {
          "message" : "User already exists " + username
        };
  }
*/    }
});


};

module.exports.Integration_delete = function(req, res) {
  //var username = req.user;
  var username = req.user;
  var id ='';

  //console.log('POST review to hotelId', re);

    User.findOne({
    username: username
  }).exec(function(err, user) {
    if (err) {
      console.log(err);
      //res.status(400).json(err);
    } else {
      id=user._id;
      console.log(user);
      //for(var i=0;i<user.integration_server.length;i++){
      //console.log(user.integration_server.length);
      //console.log(user.integration_server[i].bot_name);
      User.update({username: req.user },{$unset: {integration_server:""}}).exec(function(err, user1) {
      console.log(user1);
    
      
      });
       
     // }
      res
      .status(200)
      .json(user);
    }
  });
};


module.exports.get_usr_integration_service_saved = function(req, res) {
  var username = req.user;
 // var email = req.body.email;
  var id ='';
  var usr_array =[];
  var cnt;

  User.findOne({
      username: username
    }).exec(function(err, user) {
      if (err) {
        console.log(err);
        //res.status(400).json(err);
      } else {
          console.log(user);
          console.log(user.integration_server);
          res
            .status(200)
            .json({Array:user.integration_server});
       
      }
    });

  };

