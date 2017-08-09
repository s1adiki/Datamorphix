angular.module('meanchat').controller('userloginController', userloginController);

function userloginController($http, $location, $rootScope, $window, UserDataFactory, AuthFactory, jwtHelper) {
  var vm = this;

  

  vm.login = function() {

    

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
      $rootScope.usrname = vm.username;
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
          //document.getElementById('id01').style.display='none';
          var email_login=$rootScope.user_auth;
          var domain = email_login.split('@')[1];
          if(domain==='intellisofttech.com' || domain === 'intelliasiasoft.com' || domain === "datamorphix.com" || domain === "admin.com"){
            $location.path('/dashboard');
          }
          else{
            $location.path('/dashboard');
          }
          
          $('#mydiv').hide(); 
          
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
