angular.module('meanchat').controller('userloginController', userloginController);
angular.module('meanchat').controller('forgetemailcontroller', forgetemailcontroller);

function userloginController($http, $location, $rootScope, $window,$scope, UserDataFactory, AuthFactory, jwtHelper, sharedProperties) {
  var vm = this;

  

  vm.login = function() {

    
    var logged_usr;
    if(!vm.username){
      vm.error='Please Enter Username';
    }
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
      //$rootScope.usrname = vm.username;
      sharedProperties.usrname = vm.username;
      //var email_login=sharedProperties.usrname;
      $('#mydiv').show();
      $http.post('/api/users/login', user).then(function(response) {

        if (response.data.success) {
          $rootScope.user_auth = vm.username;
          vm.error='';
          $window.sessionStorage.token = response.data.token;
          AuthFactory.isLoggedIn = true;
          var token = $window.sessionStorage.token;
          var decodedToken = jwtHelper.decodeToken(token);
          vm.loggedInUser = decodedToken.username;
          logged_usr = decodedToken.username;
          //document.getElementById('id01').style.display='none';
          var email_login=$scope.user_auth;
          var domain = email_login.split('@')[1];
          $('#mydiv').hide(); 
          if((domain==='intellisofttech.com' || domain === 'intelliasiasoft.com' || domain === "datamorphix.com" || domain === "admin.com") && logged_usr!=='integration@intellisofttech.com'){
            $('#mydiv').hide(); 
            $location.path('/dashboard');
          }
          else if(logged_usr==='integration@intellisofttech.com'){
            $location.path('/integration');
          }
          else{
            $('#mydiv').hide(); 
            $location.path('/dashboard');
          }
          
          
          
        }
        if(response.status===204){
          vm.error='Please Enter Valid Username and Password';
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



}


function forgetemailcontroller($http, $location, $rootScope, $window, UserDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var url_querystring_host = window.location.origin;

  vm.forgetpasswrd_email = function(){
   

    var user = {      
        email:vm.frgt_email
      };
      console.log("1");
      console.log(user);
      $http.post('/api/users/password', user).then(function(result) {
        if (result.data){
          var mailOptions = {
            host:url_querystring_host,
            to: vm.frgt_email,
            from: 'mekapotulamanoj5674@gmail.com',
            subject: 'Password Reset',
            text: 'You are receiving this because you have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              
              'If you did not request this, please ignore this email and your password will remain unchanged.\n\n'
          };
  //document.getElementById('id04').style.display='none';
  //document.getElementById('id05').style.display='block';

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


}