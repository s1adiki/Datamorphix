angular.module('meanchat').controller('userpasswordController', userpasswordController);

function userpasswordController($http, $location) {
  var vm = this;
  var url_querystring = window.location.hash;
  var url_path = window.location.href;
  var url_origin = window.location.origin;
  var query_email=url_querystring.split("=");
  var my_email = query_email[1];

  vm.change_password = function(){

  	 if (vm.chng_password !== vm.chng_passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      }
      else{
      	var user = {      
      password: vm.chng_password,
      email:my_email,
      old_password:vm.current_password
    };
      	$http.post('/api/users/chng_password', user).then(function(result_auth) {
          if(result_auth.status===200){
      		document.getElementById('reset_passwrd').style.display='block';
          vm.message="Successfully password updateds";

      		console.log("Password Changed");
        }
        if(result_auth.status===201){
          vm.error='Incorrect Current Password';
        }
      	}).catch(function(error) {
      
      console.log(error);
    });
      }
  }

  vm.reset_login = function(){
	 window.location.href = url_origin;
      		$location.path('/');  
      		document.getElementById('reset_passwrd').style.display='none';	

  }



}