angular.module('meanhotel').controller('BotstoreController', BotstoreController);

function BotstoreController($http, $location) {
  var vm = this;

  vm.infoBot = function() {
  	$location.path('/infostore');

  }
}