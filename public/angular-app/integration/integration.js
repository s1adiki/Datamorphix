angular.module('meanchat').controller('integrationcontroller', integrationcontroller);

function integrationcontroller($http, $scope, $location, $window, UserDataFactory) {
  var vm = this;
 /* vm.add_service = function(){
    var service_html ='';
    var service_count = 0;
    service_count++;
    service_html ='<div class="form-group"><label for="password" class="lbl_rgstr">Services Hosted</label><input type="text" class="form-control" id="dm_service'+service_count+'" placeholder="Services Hosted" data-id="dm_service'+service_count+'" ng-model="vm.dm_service'+service_count+'" autocapitalize="none" required></div>';
  }*/

  vm.submit_service = function(){
    var IP_address = vm.ip_address;
    var services_name = vm.dm_name;
    var services_hosted0 = vm.dm_service;
    var services_hosted1 = vm.dm_service1;
    var services_hosted2 = vm.dm_service2;
    var services_hosted3 = vm.dm_service3;
    var services_hosted4 = vm.dm_service4;
    var services_hosted5 = vm.dm_service5;
    var services_hosted6 = vm.dm_service6;
    var services_hosted7 = vm.dm_service7;
    var services_hosted_array = [];

    for(var i=0;i<8;i++){
      eval("services_hosted"+i);
      if(eval("services_hosted"+i) !== undefined){
        services_hosted_array[i]=eval("services_hosted"+i);
      }
      else{
        services_hosted_array[i]='';
      }
      
    }

    var obj = {
      IP_address : IP_address,
      services_name : services_name,
      services_hosted : services_hosted_array
    };

    $http.post('/api/users/admin_dashboard_integration', obj).then(function(result) {
    vm.ip_address='';
    vm.dm_name='';
    vm.dm_service='';
    vm.dm_service1='';
    vm.dm_service2='';
    vm.dm_service3='';
    vm.dm_service4='';
    vm.dm_service5='';
    vm.dm_service6='';
    vm.dm_service7='';
    vm.message= 'Successfully Stored';
    });


    console.log(services_hosted_array);


  }
 
}
