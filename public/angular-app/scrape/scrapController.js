angular.module('meanchat').controller('Scrapecontroller', Scrapecontroller);

function Scrapecontroller($http, $location, $scope, $window) {
  var vm = this;
$scope.popup_info = false;
$scope.popup_service = false;

/*  vm.change = function(){
 $(select1).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
  $(select2).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
    $(select3).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
}*/

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

  vm.personal = function() {
$scope.popup_service = false;
$scope.popup_info = true;

//$scope.scrollTo('#select1');

  }

  vm.support = function() {

$scope.popup_info = false;
$scope.popup_service = true;
//$scope.scrollTo('#select1');

  }

  $("#scrape_info_select1").click(function() {
    $('html, body').animate({
      scrollTop: parseInt($("#get_site_info").offset().top)}, 2000);
  });



      $scope.save = function () {
      //$('#myFrame').remove();
      //$scope.popup = false;
      document.getElementById('module_script').style.display='block';
    }

    vm.submit_script = function (item1) {
      var div_id = item1.currentTarget.getAttribute("data-id");
      if(div_id===1||div_id==="1"){
      var user = {
        bot_name: "Information Bot",
        bot_user_name:"Info Bot",
      bot_script: vm.javascript_info
    };
  }
  if(div_id===2||div_id==="2"){
     var user = {
        bot_name: "Service Bot",
        bot_user_name:"Service Bot",
      bot_script: vm.javascript_service
    };
  }
      //$('#myFrame').remove();
      
      $http.post('/api/users/store_bot_script', user).then(function(result) {
        console.log(result);
        console.log("done");
        vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });
      $scope.popup_info = false;
      $scope.popup_service = false;

      document.getElementById('module_script').style.display='none';
      document.getElementById('view_dashboard').style.display='block';
    }

      vm.get_site_info = function(){
$('#scrape').show();
$location.path('/scrape_url')
  
}

 vm.supportBot = function(){
$('#scrape').hide();
$location.path('/scrape')
  
}


};



