angular.module('meanchat').controller('deploycontroller', deploycontroller);

function deploycontroller($http, $location,$rootScope ,$scope, $window) {
  var vm = this;

  vm.test = function() {
  	$scope.bot_script = null;
  	 var user = {
      _id: $rootScope.div_id
    };

  	   $http.post('/api/users/get_script_deploy', user).then(function(response) {

        if (response.status===200) {
          
        for(var i=0;i<response.data.bots_saved.length;i++){
          if($rootScope.div_id===response.data.bots_saved[i]._id){
            vm.MesSage=response.data.bots_saved[i].bot_script;
          }
        }
     
        }

      }).catch(function(error) {
       
        //vm.error='Please Enter valid script';
        console.log(error);
      });




  	

  }

 

}