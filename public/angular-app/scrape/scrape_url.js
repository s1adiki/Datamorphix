angular.module('meanchat').controller('Scrapecontroller_url', Scrapecontroller_url);

function Scrapecontroller_url($http, $location, $scope, $window) {
  var vm = this;
  $scope.change = false;
  $scope.upload = false;
  $scope.next = false;
  $scope.submitURL = false;
  $scope.test = false;
  $scope.fileContent = '';
  $scope.fileSize = 0;
  $scope.fileName = '';
  $scope.popup_info = false;
$scope.popup_service = false;
  $('#mydiv').hide();
var test_id='';
  //$scope.loading = false;
/*  $('#mydiv').hide(); 
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
    
    
    
  }*/
  vm.viewurl = function(){
    $scope.div_motion=false;
    $scope.scrape_url_initial=true;
    $('#mydiv').show();
    $http.get('/api/users/login').then(function(result_usrname) {
      if(result_usrname){
        var usr_login=result_usrname.data.username;
        var domain = usr_login.split('@')[1];
        if(usr_login==='integration@intellisofttech.com'){
          $location.path('/integration');
        }

        }


  }).catch(function(error) {
      
        console.log(error);
  }); 
    $http.post('/api/users/scrape').then(function(usrdata) {
      console.log(usrdata);
      console.log(usrdata.data.url);
      console.log(usrdata.data.email);
      if (usrdata.data.url) {
        /*vm.error='';
        vm.message="The URL You Have Submitted Is       '"+usrdata.data.url+"'";*/
        vm.url_scrape= usrdata.data.url;
        $scope.new_url=false;
        $scope.stored_url = true;
        $('#mydiv').hide(); 
        
        /*$scope.change = true;
        $scope.next = true;*/
        //vm.message="You Have Already Submitted "+response.data.url;
               
        //$location.path('/home');
      }
      else{
        
        $scope.stored_url = false;
        $scope.new_url=true;
        $('#mydiv').hide();
      }

    }).catch(function(error) {
      
      console.log(error);
    })
  }

  vm.change_url = function(){
    $('#mydiv').show(); 
    $scope.stored_url=false;
    $scope.new_url=true;
    $scope.cancel=true;
    $('#mydiv').hide(); 
  }


  vm.proceed_motion = function(){
    $('#mydiv').show(); 
    $scope.scrape_url_initial=false;
    $scope.popup_info=false;
    $scope.popup_service=false;
    $scope.div_motion=true;  
    $('#mydiv').hide();   
  }

  vm.view_old_url = function(){
    $('#mydiv').show(); 
    $scope.new_url=false;
    $scope.cancel=false;
    $scope.stored_url=true;
    $('#mydiv').hide(); 
  }

  vm.change = function(){
    $scope.submitURL = true;
  }

/*  vm.next = function(){
    $location.path('/store');
  }*/

  vm.next_phase = function(){
    $scope.scrape_url_initial= false;
    $scope.div_motion= true;
  }


    vm.submiturl = function() {
    var user = {
      url: vm.url
    };
    console.log(vm.url);
    if (!vm.url ) {
      vm.error = 'Please enter the URL.';
    } 
    else{
      //$location.path('/store');
     // $scope.loading = true;
      
      $('#mydiv').show();  
      $http.post('/api/users/submiturl', user).then(function(result) {
        console.log(result);
        console.log("done");
        //vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';

        //$('#scrape').hide();
        //$location.path('/scrape');
        //json_database(user);
         //$scope.test = true;
         
         //$scope.loading = false;
        $http.post('/api/users/scrape_data', user).then(function(result_data) {

          console.log(result_data);
          console.log("done");
          //vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
          vm.error = '';
          /*document.getElementById("get_site_info").style.backgroundColor = "#458b00";
          document.getElementById("create_bot").style.backgroundColor = "#e9970f";*/
          //$('#scrape').hide();
          //$location.path('/scrape');
           //$scope.test = true;
          $scope.scrape_url_initial= false;
          $scope.div_motion= true;
          $('#mydiv').hide(); 

         //$location.path('/scrape');
         //$scope.loading = false;
      }).catch(function(error) {
      console.log(error);
    
    });
         
        // json_database(user);
      }).catch(function(error) {
      console.log(error);
    
    });



      /*$http.post('/api/users/submiturl', user).then(function(result1) {

      }).catch(function(error) {
      console.log(error);
    
    });*///sleep(20000);
    //sleep(2000);





    }
    //var str='http';
     
    
  }

function json_database(user) {
var user = user;
  

}
  $scope.submit = function () {
    var file = document.getElementById("myFileInput").files[0];
    var content;
      
    if (file) {
      var filename = file.name;
        var ext = getExtension(filename);
        if(ext==='json'){
          vm.error = '';
          var aReader = new FileReader();
          aReader.readAsText(file, "UTF-8");
          aReader.onload = function (evt) {
            content= aReader.result;
            /*$scope.fileContent = content; 
            $scope.fileName = document.getElementById("myFileInput").files[0].name;
            $scope.fileSize = document.getElementById("myFileInput").files[0].size;*/
            var user = {
              personal_banking: content
            };
         /*   $http.post('/api/users/json', user).then(function(result_json) {
            console.log(result_json);
            console.log("done");
            //vm.message = 'Successfully Uploaded...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
            vm.error = '';
            $location.path('/scrape');
            }).catch(function(error) {

              console.log(error);
    
            });*/
        };
        aReader.onerror = function (evt) {
            console.log(aReader.onerror);
        };
        }
        else
        {
          vm.error='Please Upload JSON File Only.';
        }
      }
      else{
        vm.error='Please Upload File.'
      }

    

      //console.log(content);
      
    //console.log(personal_banking);
      


    }

function getExtension(filename) {
        var parts = filename.split('.');
        return parts[parts.length - 1];
    }

/*
  vm.get_site_info = function(){
    $('#mydiv').show(); 
$('#scrape').show();
$('#mydiv').hide(); 
//$location.path('/scrape_url')
  
}*/

/* vm.supportBot = function(){
$('#scrape').hide();
$location.path('/scrape')
  
}*/

function sleep(milliseconds) {
   $('#mydiv').show();
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
     
    if ((new Date().getTime() - start) > milliseconds){
       //$('#mydiv').hide();
      break;
    }
  }
   
}
//content to motiondiv

/*
vm.submiturl = function() {
    var user = {
      url: vm.url
    };
    console.log(vm.url);
    if (!vm.url ) {
      vm.error = 'Please enter the URL.';
    } 
    else{
     // $location.path('/store');
      $http.post('/api/users/submiturl', user).then(function(result) {
        console.log(result);
        console.log("done");
        vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';
        $scope.scrape_url_initial= false;
        $scope.div_motion= true;
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });

    }
    //var str='http';
    
    
    
  }*/

  vm.personal = function() {
    $('#mydiv').show(); 
$scope.popup_service = false;
$scope.popup_info = true;
$('html, body').animate({
      scrollTop: parseInt($("#get_site_info_motion").offset().top)}, 2000);

//$scope.scrollTo('#select1');
  $('#mydiv').hide(); 
  }

  vm.support = function() {
    $('#mydiv').show(); 
    $scope.popup_info = false;
    $scope.popup_service = true;
    $('html, body').animate({
          scrollTop: parseInt($("#get_site_info_motion").offset().top)}, 2000);
    $('#mydiv').hide(); 
    //$scope.scrollTo('#select1');

  }

/*  $("#scrape_info_select1").click(function() {
    
  });*/



      $scope.save = function () {
      //$('#myFrame').remove();
      //$scope.popup = false;
      document.getElementById('module_script').style.display='block';
    }

    vm.submit_script = function (item1) {
      var div_id = item1.currentTarget.getAttribute("data-id");
      var status_dev=$(select_role_user_status)["0"].children[1].firstChild.innerHTML;
      if(div_id===1||div_id==="1"){
      var user = {
        bot_name: "Information Bot",
        bot_user_name:"Info Bot",
        bot_script: vm.javascript_info,
        bot_status:status_dev
    };
  }
  if(div_id===2||div_id==="2"){
     var user = {
        bot_name: "Service Bot",
        bot_user_name:"Service Bot",
        bot_script: vm.javascript_service,
        bot_status:status_dev
    };
  }
  test_id = user.bot_name;
      //$('#myFrame').remove();
      $('#mydiv').show();
      $http.post('/api/users/store_bot_script', user).then(function(result) {
        console.log(result);
        console.log("done");
        vm.message = 'Successfully Submitted...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';
        $scope.popup_info = false;
        $scope.popup_service = false;
        $scope.div_motion=false;


        document.getElementById('module_script').style.display='none';
        $scope.test_section = true;
        vm.test();
        $('#mydiv').hide();
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });
      
      //document.getElementById('view_dashboard').style.display='block';
    }

      vm.get_site_info = function(){
        $('#mydiv').show(); 
        $scope.test_section = false;
        $scope.div_motion=false;
        $scope.deploy_module=false;
//$('#scrape').show();
//$location.path('/scrape_url')

  $scope.scrape_url_initial=true;
  $('#mydiv').hide(); 
}

/* vm.supportBot = function(){
$('#scrape').hide();
//$location.path('/scrape')
  
}*/

vm.test = function() {
    //$('test_section').show();
    $scope.div_motion = false;
    
    $scope.popup_modify = false;
    $scope.modify_div_section = false;
   // $('modify_div_section').hide();
    //$scope.bot_script = null;
     var user = {
      personal_banking: '1'
    };
        $('#mydiv').show(); 
       $http.post('/api/users/get_script', user).then(function(response) {

        if (response.status===200) {
          
          //$scope.bot_script=response.data.personal_banking;
          for(var i=0;i<response.data.bots_saved.length;i++){
          if(response.data.bots_saved[i].bot_name===test_id){
          document.getElementById("load_script").innerHTML=response.data.bots_saved[i].bot_script;
          var loc = response.data.bots_saved[i].bot_script;
          var res = loc.substring(172);
          res = res.substring(1,100);
          console.log(loc);
          console.log(res);
          var href ='https://api.motion.ai/webchat/'+res;
          console.log(href);
          //console.log($rootScope.div_id);
          if(test_id==='Information Bot'){
            //$('#myFrame_info').attr('src', href);
            var myEl = angular.element(document.querySelector('#myFrame_test'));
            myEl.attr('src',href);
          }
          else if(test_id==='Service Bot'){
            //$('#myFrame_service').attr('src', href);
            var myEl = angular.element(document.querySelector('#myFrame_test'));
            myEl.attr('src',href);
          }
          
                   //jQuery('body').prepend(response.data.personal_banking);
          //$scope.divHtmlVar=response.data.personal_banking;
          //var url = 'C:\\Users\\Mekapotula Manoj\\Desktop\\Intellisoft\\WEB\\New folder\\Chat-BOT\\test_html.html';
          //var url = './Chat-BOT/test_html.html'
          //console.log(url);
          //$location.path('/test');
    // window.location.replace(url, '__blank');

    $('html, body').animate({
        scrollTop: parseInt($("#deploy_nav_test").offset().top)
    }, 2000);


}}$('#mydiv').hide(); 
     
        }

      }).catch(function(error) {
       
        //vm.error='Please Enter valid script';
        console.log(error);
      });




    

  }


  vm.createBot = function(){
    $('#mydiv').show(); 
    $scope.test_section = false;
    $scope.deploy_module = false;
    $scope.div_motion = false;
    $('#mydiv').hide(); 
    vm.proceed_motion();
    
  }

  vm.deploy = function() {
    $('#mydiv').show();
    $scope.div_motion = false;
    
    $scope.test_section = false;
    $scope.modify_div_section = false;
    $scope.deploy_module = true;
    $('#mydiv').hide();
    vm.create_deploy();
    
  }

  vm.testBot = function(){
    $('#mydiv').show();
    $scope.div_motion = false;
    $scope.modify_div_section = false;
    $scope.deploy_module = false;
    $scope.test_section = true;
    $('#mydiv').hide();
    vm.test();
  }


  vm.create_deploy = function() {
    $scope.bot_script = null;
     var user = {
      _id: '1'
    };
        $('#mydiv').show();
       $http.post('/api/users/get_script_deploy', user).then(function(response) {

        if (response.status===200) {
          
        for(var i=0;i<response.data.bots_saved.length;i++){
          if(test_id===response.data.bots_saved[i].bot_name){
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

vm.change_status = function(){
  $(select_role_user_status).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    //temp_edit_object.bot_help= o;
});
}


};




