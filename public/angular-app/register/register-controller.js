angular.module('meanhotel').controller('RegisterController', RegisterController);

function RegisterController($http) {
  var vm = this;

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
   
    

    



    else {
      if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      } else {
        $http.post('/api/users/register', user).then(function(result) {
          console.log(result);
          vm.message = 'Successful registration, please login.';
          vm.error = '';
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
  }
};
