angular.module('meanchat').controller('LoginController', LoginController);




function LoginController($http, $location, $window, $rootScope, UserDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var url_querystring_host = window.location.origin;
  var authEmail_flg = false;
  /*var query_email=url_querystring.split("=");
  var my_email = query_email[1];*/

 // var nodemailer = require('nodemailer');

  $('#mydiv').hide(); 
  var flag=false;
  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };

  vm.authEmail = function() {
    var email_login=$rootScope.user_auth;
    /*if(email_login === '' || email_login ===undefined){
      $http.get('/api/users/login').then(function(response) {
        email_login = response.data.username;
        var domain = email_login.split('@')[1];

        if(domain==='intellisofttech.com' || domain === 'intelliasiasoft.com' || domain === "datamorphix.com" || domain === "admin.com"){
          return true;
        }
        else{
          return false;
        }
      });
    }
    else{*/
      var domain = email_login.split('@')[1];

      if(domain==='intellisofttech.com' || domain === 'intelliasiasoft.com' || domain === "datamorphix.com" || domain === "admin.com"){
        return true;
      }
      else{
        return false;
      }
   /* }*/
  };

  vm.login = function() {

    

    if(!vm.username){
      vm.error='Please Enter Username';
    }
    $rootScope.usrname = vm.username;
    if(!vm.username && !vm.password){
      vm.error='Please Enter Username and Password';
    }

    else if(!vm.password){
      vm.error='Please Enter Password';
    }

    
      

    else{

    if (vm.username && vm.password) {
      var user = {
        username: vm.username,
        password: vm.password
      };
      $('#mydiv').show();

///////





////////
      $http.post('/api/users/login', user).then(function(response) {

        if (response.data.success) {
          vm.error='';
          $window.sessionStorage.token = response.data.token;
          AuthFactory.isLoggedIn = true;
          var token = $window.sessionStorage.token;
          var decodedToken = jwtHelper.decodeToken(token);
          vm.loggedInUser = decodedToken.username;
          document.getElementById('id01').style.display='none';
          //authEmail_flg = true;
          $location.path('/dashboard');
          $('#mydiv').hide(); 
          
        }

      }).catch(function(error) {
        $('#mydiv').hide();
        vm.error='Please Enter Valid Username and Password';
        console.log(error);
      });

    }
    }
  }







    vm.register = function() {
    var user = {
      username: vm.username,
      password: vm.password,
      email:vm.eMail
    };


    if(!vm.username){
      vm.error='Please Enter Username';
    }
    if(!vm.username && !vm.password){
      vm.error='Please Enter Username and Password';
    }
    if(!vm.eMail && !vm.password){
      vm.error='Please Enter E-Mail and Password';
    }
    if(!vm.eMail && !vm.passwordRepeat){
      vm.error='Please Enter E-Mail and Repeat-Password';
    }
    if(!vm.eMail && !vm.username){
      vm.error='Please Enter Username and E-Mail';
    }
    if(!vm.username && !vm.password && !vm.eMail){
      vm.error='Please Enter Username,Password and E-Mail';
    }

    else if(!vm.password){
      vm.error='Please Enter Password';
    }
    else if(!vm.passwordRepeat){
      vm.error='Please Enter Repeat-Password';
    }
    else if(!vm.eMail){
      vm.error='Please Enter E-Mail';
    }

    

    /*vm.regex=/?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
   */
    

    



    else {
      if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      } else {
        vm.error='';
        $('#mydiv').show();
        $http.post('/api/users/register_auth', user).then(function(result_auth) {
        console.log(result_auth); 
        if (result_auth.data){       
        var usrnme=result_auth.data.username;
        if (usrnme===vm.username){
          flag=false;
        }
        else{
          flag=true;
        }
      }
      else{
        flag=true;
      }
        if(flag){
       
        
        //callback(null, result_auth);
        //$location.path('/store');
        $http.post('/api/users/register', user).then(function(result) {
          console.log(result);
          vm.message = 'Successful registration, please login.';
          vm.error = '';
          document.getElementById('id02').style.display='none';
          document.getElementById('id03').style.display='block';
           
        }).catch(function(error) {
          console.log(error);
        });
       
      }
      else{
        vm.error = 'User Name is already taken.....Please try other User Name';
      }
       }).catch(function(error) {
      console.log(error);
    
    });
      $('#mydiv').hide();
      }
    }
  }


     /* function validate_multiuser(){
      $http.post('/api/users/register_auth').then(function(result_auth) {
        console.log(result_auth);        
        var usrnme=result_auth.data.username;
        if (usrnme===vm.username){
          flag=false;
        }
        else{
          flag=true;
        }
        callback(null, result_auth);
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });
  }
*/


  vm.redirect = function(){
    $('#mydiv').show();
    document.getElementById('id03').style.display='none';
    
    vm.username='';
    vm.password='';
    vm.passwordRepeat='';
    vm.eMail='';
    vm.error='';
    document.getElementById('id01').style.display='block';
    $('#mydiv').hide(); 
  }

  vm.redirect_frgetpasswrd = function(){
    $('#mydiv').show();
    document.getElementById('id01').style.display='none';
    document.getElementById('id02').style.display='none';
    vm.username='';
    vm.password='';
    vm.passwordRepeat='';
    vm.eMail='';
    vm.error='';
    document.getElementById('id04').style.display='block';
    $('#mydiv').hide(); 
  }


  vm.forgetpasswrd = function(){
 

  var user = {      
      email:vm.eMail_frgtpswrd
    };
    console.log("1");
console.log(user);
     $http.post('/api/users/password', user).then(function(result) {
     
          if (result.data){
       

            var mailOptions = {
              host:url_querystring_host,
        to: vm.eMail_frgtpswrd,
        from: 'mekapotulamanoj5674@gmail.com',
        subject: 'Password Reset',
        text: 'You are receiving this because you have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          
          'If you did not request this, please ignore this email and your password will remain unchanged.\n\n'
      };
document.getElementById('id04').style.display='none';
document.getElementById('id05').style.display='block';

      $http.post('/api/users/chng_password_email', mailOptions).then(function(result_data) {
        
        
        console.log("mail sent");
      }).catch(function(error) {
      
      console.log(error);
    });



          }

    
    }).catch(function(error) {
      
      console.log(error);
    });
   
  }


  vm.clear = function(){
    vm.username='';
    vm.password='';
    vm.passwordRepeat='';
    vm.eMail='';
    vm.error='';
  }
  /*vm.botservice = function(){
    $http.post('/api/users/scrape').then(function(usrdata) {
      console.log(usrdata);
      console.log(usrdata.data.url);
      console.log(usrdata.data.email);
      if (usrdata.data.url) {
        vm.error='';
        $location.path('/scrape_url');
        //vm.message="You Have Already Submitted "+response.data.url;
               
        //$location.path('/home');
      }
      else{
        $location.path('/scrape');
      }

    }).catch(function(error) {
      
      console.log(error);
    });

  }*/

  

  vm.validate = function() {
  /*$("#result").text("");*/
  var email = vm.eMail;
  if (validateEmail(email)) {
    vm.error='';
  } else {
    vm.error='Please Enter Valid E-Mail';
  }
  return false;
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

  vm.logout = function() {
    AuthFactory.isLoggedIn = false;
    delete $window.sessionStorage.token;
    $location.path('/');
  }


  /*vm.profile=function(){


    $http.post('/api/users/profile', user).then(function(response) {
        if (response.data.success) {
          $window.sessionStorage.token = response.data.token;
          AuthFactory.isLoggedIn = true;
          var token = $window.sessionStorage.token;
          var decodedToken = jwtHelper.decodeToken(token);
          vm.loggedInUser = decodedToken.username;
        }$location.path('/');
      }).catch(function(error) {
        console.log(error);
      })*/



    /*UserDataFactory.GetUser(vm.username).then(function(response) {
      if (response.data.success) {
        vm.userData = response.data;
        console.log(vm.userData)
      }
    }).catch(function(error) {
      console.log(error);
    })

  
  }
*/

  vm.isActiveTab = function(url) {
    var currentPath = $location.path().split('/')[1];
    return (url === currentPath ? 'active' : '');
  }
}
