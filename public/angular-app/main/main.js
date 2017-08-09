angular.module('meanchat').controller('mainController', mainController);

function mainController($location, $window) {
	var vm = this;
	
 vm.Subscribe = function(){

 	$location.path('/register');


 }
  vm.ContactUS = function(){

 	$location.path('/contactUs');


 }
   vm.SampleBOT = function(){

   	var url = 'http://34.212.169.24:3000/test_html.html';

   	window.open(url,'_blank');

 	//$location.path('/contactUs');


 }
}

/*function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      event.preventDefault();
      window.history.forward();
    
  });
}
*/