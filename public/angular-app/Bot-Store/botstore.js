angular.module('meanchat').controller('BotstoreController', BotstoreController);

function BotstoreController($http, $location, $scope, $window, $rootScope) {
  var vm = this;
  $scope.popup_modify = false;
  $scope.modify_div_section = false;
  $('#mydiv').hide();
  var temp;

  vm.test = function() {
    //$('test_section').show();
    
    $scope.popup_modify = false;
    $scope.modify_div_section = false;
    $('modify_div_section').hide();
  	$scope.bot_script = null;
    $('#mydiv').show();
  	 var user = {
      personal_banking: '1'
    };
    $http.post('/api/users/get_script_deploy', user).then(function(response_ad) {
      var domain =response_ad.data.username.split('@')[1];
      if(response_ad.data.username==='admin@admin.com'){
        $scope.test_section = true;
        var id;
        var usr;
        if(response_ad.data.username==='admin@admin.com'){
          id=$rootScope.div_id.split("_");
          temp = 'admin@admin.com';
          var usr ={
          id:id[1]
        }
        }
        else{
          id=$rootScope.div_id;
        usr ={
          id:id
        }
        }
        
        $http.post('/api/users/get_script_admin', usr).then(function(response) {

            if (response.status===200) {
              
              //$scope.bot_script=response.data.personal_banking;
              for(var i=0;i<response.data.bots_saved.length;i++){
              if(response.data.bots_saved[i]._id===id[0]){

              document.getElementById("load_script").innerHTML=response.data.bots_saved[i].bot_script;
              var loc = response.data.bots_saved[i].bot_script;
              var res = loc.substring(172);
              res = res.substring(1,100);
              console.log(loc);
              console.log(res);
              var href ='https://api.motion.ai/webchat/'+res;
              console.log(href);
              console.log($rootScope.div_id);
              $('#myFrame').attr('src', href);
                       //jQuery('body').prepend(response.data.personal_banking);
              //$scope.divHtmlVar=response.data.personal_banking;
              //var url = 'C:\\Users\\Mekapotula Manoj\\Desktop\\Intellisoft\\WEB\\New folder\\Chat-BOT\\test_html.html';
              //var url = './Chat-BOT/test_html.html'
              //console.log(url);
              //$location.path('/test');
        // window.location.replace(url, '__blank');

                  $('html, body').animate({
                      scrollTop: parseInt($("#test_nav_modify").offset().top)
                  }, 2000);
                  $('#mydiv').hide();

              }}
         
            }

          }).catch(function(error) {
           
            //vm.error='Please Enter valid script';
            console.log(error);
          });
      }
      else{


  	   $http.post('/api/users/get_script', user).then(function(response) {

        if (response.status===200) {
          
          //$scope.bot_script=response.data.personal_banking;
          
          var id=$rootScope.div_id.split("_");
          for(var i=0;i<response.data.bots_saved.length;i++){
          if(response.data.bots_saved[i]._id===id[0]){
            
          
          var loc = response.data.bots_saved[i].bot_script;
          var res = loc.substring(172);
          res = res.substring(1,100);
          console.log(loc);
          console.log(res);
          var href ='https://api.motion.ai/webchat/'+res;
          console.log(href);
          console.log($rootScope.div_id);
          
          if(domain==='intellisofttech.com' || domain === 'intelliasiasoft.com' || domain === "datamorphix.com"){
              document.getElementById("load_script").innerHTML=response.data.bots_saved[i].bot_script;
              $scope.test_section = true;
              $('#myFrame').attr('src', href);
            }
            else{
              document.getElementById("load_script_test").innerHTML=response.data.bots_saved[i].bot_script;
              $scope.test_section_test = true;
              $('#myFrame_test').attr('src', href);
            }
                   //jQuery('body').prepend(response.data.personal_banking);
          //$scope.divHtmlVar=response.data.personal_banking;
          //var url = 'C:\\Users\\Mekapotula Manoj\\Desktop\\Intellisoft\\WEB\\New folder\\Chat-BOT\\test_html.html';
          //var url = './Chat-BOT/test_html.html'
          //console.log(url);
          //$location.path('/test');
		// window.location.replace(url, '__blank');

              $('html, body').animate({
                  scrollTop: parseInt($("#test_nav_modify_1").offset().top)
              }, 2000);
              $('#mydiv').hide();

          }}
     
        }

          }).catch(function(error) {
           
            //vm.error='Please Enter valid script';
            console.log(error);
          });

        }
       }).catch(function(error) {
       
        //vm.error='Please Enter valid script';
        console.log(error);
      });




  	

  }


  vm.approved = function(){
    var data = 'Approved';
    var user ={
      id:1
    }
    var id= $rootScope.div_id.split("_");
    $http.post('/api/users/get_script', user).then(function(response) {
      if (response.status===200) {
        for(var i=0;i<response.data.bots_saved.length;i++){
          if(response.data.bots_saved[i]._id===id[0]){
            var bot_name = response.data.bots_saved[i].bot_name;
            var status = 'Approved';
            var bot_user_name = response.data.bots_saved[i].bot_user_name;
            var bot_script = response.data.bots_saved[i].bot_script;
            var bot_developer = response.data.bots_saved[i].bot_developer;
            var user ={
              bot_name : bot_name,
              bot_status : status,
              bot_user_name : bot_user_name,
              bot_script : bot_script,
              bot_developer : bot_developer
            }
            $http.post('/api/users/store_bot_script_enduser', user).then(function(response) {
              
              $http.post('/api/users/store_bot_script_enduser_developer', user).then(function(response) {
                vm.message="BOT Approved";
              });

            });
          }
        }
      }
    });
  }

  vm.deploy = function() {
    $('#mydiv').show();
    $scope.test_section = false;
    $scope.popup_modify = false;
    $scope.popup_service = false;
    $scope.modify_div_section = false;
    $scope.deploy_modify_test = true;
    $('#mydiv').hide();
    vm.deploy_final();
    //$location.path('/final_store');

  }

    vm.personal_modify = function() {

$scope.popup_modify = true;
//$scope.scrollTo('#select1');

  }

  vm.modifyBot = function(){
    $scope.test_section = false;
    $scope.deploy_modify_test = false;
    $('test_section').hide();
    var user = {
      personal_banking: '1'
    };
    
    $('#mydiv').show();
   $http.post('/api/users/get_script', user).then(function(response) {

      if (response.status===200) {
        var id_=$rootScope.div_id.split("_");
        id = id_[0];
        if(temp==='admin@admin.com'){
          var user = {
            id: id_[1]
          };
          $http.post('/api/users/get_script_admin', user).then(function(response_ad) {
          for(var i=0;i<response_ad.data.bots_saved.length;i++){
            if(response_ad.data.bots_saved[i]._id===id){
              if(response_ad.data.bots_saved[i].bot_name==='Service Bot'){
                $scope.popup_modify = false;
                $scope.popup_service = true;
              }
              if(response_ad.data.bots_saved[i].bot_name==='Information Bot'){
                $scope.popup_service = false;
                $scope.popup_modify = true;
              }
            }}
          });
        }
        else{
        for(var i=0;i<response.data.bots_saved.length;i++){
          if(response.data.bots_saved[i]._id===id){
            if(response.data.bots_saved[i].bot_name==='Service Bot'){
              $scope.popup_modify = false;
              $scope.popup_service = true;
            }
            if(response.data.bots_saved[i].bot_name==='Information Bot'){
              $scope.popup_service = false;
              $scope.popup_modify = true;
            }
          }}

        }
      }
       $('html, body').animate({
      scrollTop: parseInt($("#create_bot_modify").offset().top)}, 2000);
       $('#mydiv').hide();


   }).catch(function(error) {
       
        //vm.error='Please Enter valid script';
        console.log(error);
      });
   $('modify_div_section').show();
   $scope.modify_div_section = true;

       /* $('html, body').animate({
        scrollTop: parseInt($("#deploy_nav_test")).offset().top
    }, 2000);*/

  }

  vm.infoBot = function(){
    $('#mydiv').show();
    $('test_section').show();
    $('modify_div_section').hide();
    $scope.modify_div_section = false;
    $scope.popup_modify = false;
    $scope.popup_service = false;
    $scope.deploy_modify_test = false;
    $scope.test_section = true;
    $('#mydiv').hide();
    vm.test();

    // $('#deploy_nav_test').show();
   /*      $("body, html").animate({
        scrollTop: parseInt($("#deploy_nav_test").offset().top)
    }, 2000);*/
  //document.location.reload();

  
  }

  $scope.save = function () {
      //$('#myFrame').remove();
      //$scope.popup = false;
      $('#mydiv').show();
      document.getElementById('module_script_modify').style.display='block';
      $('#mydiv').hide();
    }

      vm.submit_script_modify = function () {
      var user = {
      personal_banking: vm.javascript
    };
      //$('#myFrame').remove();
      $('#mydiv').show();
      $http.post('/api/users/store_script', user).then(function(result) {
        console.log(result);
        console.log("done");
        vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';
        $('#mydiv').hide();
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });
      $scope.popup = false;
      document.getElementById('module_script').style.display='none';
      $location.path('/store');
    }


    vm.deploy_final = function() {
    $scope.bot_script = null;
    $('#mydiv').show();
    var id = $rootScope.div_id.split("_");

     var user = {
      id: id[1]
    };
    if(temp==='admin@admin.com'){
      $http.post('/api/users/get_script_admin', user).then(function(response_ad) {
      if (response_ad.status===200) {
        
        for(var i=0;i<response_ad.data.bots_saved.length;i++){
          if(id[0]===response_ad.data.bots_saved[i]._id){
            vm.MesSage=response_ad.data.bots_saved[i].bot_script;
          }
        }
     
        }
        $('#mydiv').hide();
      });
    }
    else
    {
     $http.post('/api/users/get_script_deploy', user).then(function(response) {

      if (response.status===200) {
        
      for(var i=0;i<response.data.bots_saved.length;i++){
        if(id[0]===response.data.bots_saved[i]._id){
          vm.MesSage=response.data.bots_saved[i].bot_script;
        }
      }
   
      }
      $('#mydiv').hide();

    }).catch(function(error) {
     
      //vm.error='Please Enter valid script';
      console.log(error);
    });

  }


    

  }


}


function dashboardController($http,$sce, $rootScope, $routeParams,$compile, $location, $window, $scope, UserDataFactory, AuthFactory, jwtHelper) {



}