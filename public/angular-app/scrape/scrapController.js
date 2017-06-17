angular.module('meanhotel').controller('Scrapecontroller', Scrapecontroller);

function Scrapecontroller($http, $location) {
  var vm = this;

  vm.submiturl = function() {
    var user = {
      url: vm.url
    };
    console.log(vm.url);
    if (!vm.url ) {
      vm.error = 'Please enter the URL.';
    } 
    else{
      $location.path('/store');
      $http.post('/api/users/submiturl', user).then(function(result) {
        console.log(result);
        console.log("done");
        vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });

    }
    //var str='http';
    
    
    
  }
};
