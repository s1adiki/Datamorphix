angular.module('meanhotel').controller('PLoginController', PLoginController);

function PLoginController($route, $routeParams, $window, AuthFactory, jwtHelper) {
  var vm = this;
  //vm.title = 'MEAN Hotel App';

	vm.isLoggedIn = function() {
	    if (AuthFactory.isLoggedIn) {
	      return true;
	    } else {
	      return false;
	    }
	  };

  var token = jwtHelper.decodeToken($window.sessionStorage.token);
  var username = token.username;
  vm.loggedInUser = username;
}
