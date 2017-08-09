angular.module('meanchat').controller('dashboardController', dashboardController);

function dashboardController($http,$sce, $rootScope, $routeParams,$compile, $location, $window, $scope, UserDataFactory, AuthFactory, jwtHelper) {
	var vm = this;
	  var flag_info = false;
    //var flag_info_edit = true
  	  var flag_service = false;
      var flag_help = false;
      var set_flag = true;
      var getValue_info ='';
      var getValue_service = '';
      var getValue_help = '';
      $scope.add_user = false;
      $scope.delete_user = false;
      $scope.user_mngmnt = false;
      var err_flg= false;
      var temp_edit_object = "";
      $('#mydiv').hide();
      var count_checked=0;
      var services_list;




      vm.add_user = function(){
        $('#mydiv').show();
        $('#bot_mngmnt_overall').hide();
        $scope.user_mngmnt = true;
        $scope.add_user = true;
        $scope.Integration_mngmnt = false;
        $scope.delete_user = false;
        $scope.bot_mngmnt = false;
        $('#mydiv').hide();
      }

       vm.delete_user = function(){
        vm.message='';
        $('#bot_mngmnt_overall').hide();
        $scope.user_mngmnt = true;
        $scope.add_user = false;
        $scope.delete_user = true;
        $scope.Integration_mngmnt = false;
        $scope.bot_mngmnt = false;
        $scope.edit_div = false;
        $('#mydiv').show();

        $http.get('/api/users/register_auth_mngmnt_bot').then(function(result) {
          console.log(result.data.count);
          var delete_text_html ='';
          var delete_text_html_append= '';
          document.getElementById("delete_innerhtml").innerHTML='';

          for(var i=0;i<result.data.count;i++){
            var append_html ='';
            if(result.data.Array[i].bot_help!=='false'){
              var drpdwn_txt = '<li ><a >Help Bot</a></li>';
              append_html = append_html.concat(drpdwn_txt);
            }  

            if(result.data.Array[i].bot_info!=='false'){
              var drpdwn_txt = '<li ><a >Information Bot</a></li>';
              append_html = append_html.concat(drpdwn_txt);
            }
            if(result.data.Array[i].bot_service!=='false'){
              var drpdwn_txt = '<li ><a >Service Bot</a></li>';
              append_html = append_html.concat(drpdwn_txt);
            }



            if(i<5){
              delete_text_html = '<label for="Organisation name" style="position:relative; width:870px; right:40px;height:50px;" >             <div style="position:absolute;max-width:130px;left:5%;overflow:hidden;top:15px;" >'+result.data.Array[i].empId+'</div><div style="position:absolute;left:26%;max-width:14%;overflow:hidden;text-align:center;top:15px;">'+result.data.Array[i].firstname+'</div>              <div style="position:absolute;left:46%;max-width:20%;top:-15%;"><div class="input-group-btn select"  >    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">Assigned Bots</span> <span class="caret"></span></button>    <ul class="dropdown-menu" style="width: 172px;" role="menu">'+append_html+'</ul></div></div><div style="position:absolute;left:72%;max-width:26%;overflow: hidden;top:15px;">'+result.data.Array[i].email+'</div><button type="submit" id="'+result.data.Array[i].email+'" class="rgstr_btn"style="position: relative;left: 880px;top:-5px;" data-id="'+result.data.Array[i].empId+'" ng-click="vm.myFunction($event)" >Delete</button> </label>';
            }
            else{
              delete_text_html = '<label for="Organisation name" style="position:relative; width:870px; right:8px;height:50px;" >        <div style="position:absolute;max-width:130px;left:5%;overflow:hidden;top:15px;" >'+result.data.Array[i].empId+'</div><div style="position:absolute;left:26%;max-width:14%;overflow:hidden;text-align:center;top:15px;">'+result.data.Array[i].firstname+'</div>              <div style="position:absolute;left:46%;max-width:20%;top:-15%;"><div class="input-group-btn select"  >    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">Assigned Bots</span> <span class="caret"></span></button>    <ul class="dropdown-menu" style="width: 172px;" role="menu">'+append_html+'</ul></div></div><div style="position:absolute;left:72%;max-width:26%;overflow: hidden;top:15px;">'+result.data.Array[i].email+'</div><button type="submit" id="'+result.data.Array[i].email+'" class="rgstr_btn"style="position: relative;left: 880px;top:-5px;" data-id="'+result.data.Array[i].empId+'" ng-click="vm.myFunction($event)" >Delete</button> </label>';

            }
            delete_text_html_append = delete_text_html_append.concat(delete_text_html);

          }

          //$scope.customHtml=$sce.trustAsHtml(delete_text_html_append);
          var temp = $compile(delete_text_html_append)($scope); 
          angular.element(document.getElementById('delete_innerhtml')).append(temp);
          var div = angular.element("delete_innerhtml");
          $('#mydiv').hide();
 //div.bind('click', vm.myFunction());
 //$scope.delete_innerhtml=$sce.trustAsHtml(delete_text_html_append);
         
        });

      }

      vm.edit_user = function(){
        vm.message='';
        $('#bot_mngmnt_overall').hide();
        $scope.user_mngmnt = true;
        $scope.add_user = false;
        $scope.delete_user = true;
        $scope.bot_mngmnt = false;
        $scope.Integration_mngmnt = false;
        $scope.edit_div= false;
        $('#mydiv').show();
         $http.get('/api/users/register_auth_mngmnt_bot').then(function(result) {
          console.log(result.data.count);
          var delete_text_html ='';
          var delete_text_html_append= '';
          document.getElementById("delete_innerhtml").innerHTML='';

          for(var i=0;i<result.data.count;i++){
            var append_html ='';
            if(result.data.Array[i].bot_help!=='false'){
              var drpdwn_txt = '<li ><a >Help Bot</a></li>';
              append_html = append_html.concat(drpdwn_txt);
            }  

            if(result.data.Array[i].bot_info!=='false'){
              var drpdwn_txt = '<li ><a >Information Bot</a></li>';
              append_html = append_html.concat(drpdwn_txt);
            }
            if(result.data.Array[i].bot_service!=='false'){
              var drpdwn_txt = '<li ><a >Service Bot</a></li>';
              append_html = append_html.concat(drpdwn_txt);
            }



            if(i<5){
              delete_text_html = '<label for="Organisation name" style="position:relative; width:870px; right:40px;height:50px;" >             <div style="position:absolute;max-width:130px;left:5%;overflow:hidden;top:15px;" >'+result.data.Array[i].empId+'</div><div style="position:absolute;left:26%;max-width:14%;overflow:hidden;text-align:center;top:15px;">'+result.data.Array[i].firstname+'</div>              <div style="position:absolute;left:46%;max-width:20%;top:-15%;"><div class="input-group-btn select"  >    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">Assigned Bots</span> <span class="caret"></span></button>    <ul class="dropdown-menu" style="width: 172px;" role="menu">'+append_html+'</ul></div></div><div style="position:absolute;left:72%;max-width:26%;overflow: hidden;top:15px;">'+result.data.Array[i].email+'</div><button type="submit" id="'+result.data.Array[i].empId+'" class="rgstr_btn"style="position: relative;left: 880px;top:-5px;" data-id="'+result.data.Array[i].empId+'" ng-click="vm.myFunction_edit($event)" >Edit</button> </label>';
            }
            else{
              delete_text_html = '<label for="Organisation name" style="position:relative; width:870px; right:8px;height:50px;" >        <div style="position:absolute;max-width:130px;left:5%;overflow:hidden;top:15px;" >'+result.data.Array[i].empId+'</div><div style="position:absolute;left:26%;max-width:14%;overflow:hidden;text-align:center;top:15px;">'+result.data.Array[i].firstname+'</div>              <div style="position:absolute;left:46%;max-width:20%;top:-15%;"><div class="input-group-btn select"  >    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">Assigned Bots</span> <span class="caret"></span></button>    <ul class="dropdown-menu" style="width: 172px;" role="menu">'+append_html+'</ul></div></div><div style="position:absolute;left:72%;max-width:26%;overflow: hidden;top:15px;">'+result.data.Array[i].email+'</div><button type="submit" id="'+result.data.Array[i].empId+'" class="rgstr_btn"style="position: relative;left: 880px;top:-5px;" data-id="'+result.data.Array[i].empId+'" ng-click="vm.myFunction_edit($event)" >Edit</button> </label></br>';

            }
            delete_text_html_append = delete_text_html_append.concat(delete_text_html);

          }
          delete_text_html_append = delete_text_html_append.concat('</br></br>');   
          //$scope.customHtml=$sce.trustAsHtml(delete_text_html_append);
          var temp = $compile(delete_text_html_append)($scope); 
          angular.element(document.getElementById('delete_innerhtml')).append(temp);
          var div = angular.element("delete_innerhtml");
          $('#mydiv').hide();
 //div.bind('click', vm.myFunction());
 //$scope.delete_innerhtml=$sce.trustAsHtml(delete_text_html_append);
         
        });

      }




	vm.bot_type_info = function($event) {
               // alert($event);

            if($event){
              $scope.info_drpdwn = true;
              flag_info = true;
            }
            if(!$event){
               $scope.info_drpdwn = false;
               flag_info = false;
            }
          }

  vm.bot_type_service = function($event) {
               // alert($event);

            if($event){
              $scope.service_drpdwn = true;
              flag_service = true;
            }
            if(!$event){
               $scope.service_drpdwn = false;
               flag_service = false;
            }
          }


  vm.bot_type_help = function($event) {
               // alert($event);

            if($event){
              $scope.help_drpdwn = true;
              flag_help = true;
            }
            if(!$event){
               $scope.help_drpdwn = false;
               flag_help = false;
            }
          }


vm.user_authorization = function() {
  vm.message="";
  $('#bot_mngmnt_overall').hide();

    var registered_list =[];
    var flag=false;
    var email_flag= validateEmail(vm.emAil1);

  
    if(flag_info === false&&flag_service === false&&flag_help === false){
      vm.error='Please select type of BOT that User Required';
      err_flg=true;
    }
     else if(!email_flag){
      vm.error='Please Enter Correct E-Mail Format';
      err_flg=true;
    }
    else if(($(select_role_user)["0"].children[1].firstChild.id)===''){
      vm.error='Please select type of Role';
      err_flg=true;
    }



    else {
      vm.error = '';
      /*if(flag_info){
      getValue_info=$(select1)["0"].children["0"].firstChild.id;  
      registered_list.push('Information BOT');
      if(!getValue_info){
        vm.error="Please Select Information Bot Value";
        set_flag = false;
        err_flg=true;
      }    
      else{
        set_flag = true;
      }
    }
    else{
      getValue_info=0;
      
    }
      if(flag_service){
      getValue_service=$(select2)["0"].children["0"].firstChild.id;
      registered_list.push('Service BOT'); 
      if(!getValue_service){
        vm.error="Please Select Service Bot Value";
        set_flag = false;
        err_flg=true;
      }  
      else{
        set_flag = true;
      }

    }
    else{
      getValue_service=0;
      
    }

      if(flag_help){
      getValue_help=$(select3)["0"].children["0"].firstChild.id;
      registered_list.push('Help BOT'); 
      if(!getValue_help){
        vm.error="Please Select Help Bot Value";
        set_flag = false;
        err_flg=true;
      }  
      else{
        set_flag = true;
      }
    }
    else{
      getValue_help=0;
      
    }
      console.log(getValue_info);
      console.log(getValue_service);
      console.log(getValue_help);
*/

//bots_authorized.append(data);
      if(set_flag){
        $('#mydiv').show(); 
            var user = {
      firstname: vm.firstname,
      lastname: vm.lastname,
      email:vm.emAil1,
      empId:vm.empId,
      Department:vm.Department,
      Role:$(select_role_user)["0"].children[1].firstChild.id,
      manager_ID:vm.manager_ID,
      bot_info:flag_info,
      bot_service:flag_service,
      bot_help:flag_help
    };
    /*vm.change_drp('select3','');
    vm.change_drp('select2','');
    vm.change_drp('select1','');*/
    vm.change_drp('select_role_user','');

   $('html, body').animate({ scrollTop: 0 }, 1000);

   

      $http.post('/api/users/register_auth_mngmnt', user).then(function(result) {
       
        console.log(result);
        $('#mydiv').hide();
        if (result.status===201) {
           vm.error=result.data.message;
        }
        else if(result.status===200){
          vm.firstname='';
          vm.lastname='';
          vm.emAil1='';
          vm.empId='';
          vm.Department='';
          vm.Role='';
          vm.manager_ID='';
          $scope.info_drpdwn=false;
          $scope.service_drpdwn=false;
          $scope.help_drpdwn=false;
          $scope.vm.info_chk=false;
          $scope.vm.service_chk=false;
          $scope.vm.help_chk=false;
          flag_service = false;
          flag_info = false;
          flag_help = false;
          vm.message='Successfully registered';
        }


       
}).catch(function(error) {
          console.log(error);
        });



      }
      else{
        if(err_flg===true){
           $('html, body').animate({ scrollTop: 0 }, 2000);
        }
      }
    }if(err_flg===true){
           $('html, body').animate({ scrollTop: 0 }, 2000);
        }
  }



  vm.bot_type_info_edit = function($event) {
               // alert($event);

            if($event){
              $scope.info_drpdwn_edit = true;
              flag_info = true;
              temp_edit_object.bot_info= "true"
            }
            if(!$event){
               $scope.info_drpdwn_edit = false;
               flag_info = false;
               temp_edit_object.bot_info= "false";
            }
          }

  vm.bot_type_service_edit = function($event) {
               // alert($event);

            if($event){
              $scope.service_drpdwn_edit = true;
              flag_service = true;
              temp_edit_object.bot_service= "true";
            }
            if(!$event){
               $scope.service_drpdwn_edit = false;
               flag_service = false;
               temp_edit_object.bot_service= "false";
            }
          }


  vm.bot_type_help_edit = function($event) {
               // alert($event);

            if($event){
              $scope.help_drpdwn_edit = true;
              flag_help = true;
              temp_edit_object.bot_help= "true";
            }
            if(!$event){
               $scope.help_drpdwn_edit = false;
               flag_help = false;
               temp_edit_object.bot_help= "false";
            }
          }



  vm.change = function(){
   /* $(select1).on('click','.option li',function(){
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
  $(select1_edit).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    temp_edit_object.bot_info= o;
});
  $(select2_edit).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    temp_edit_object.bot_service= o;
});
    $(select3_edit).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    temp_edit_object.bot_help= o;
});*/
     $(select_role_user).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    temp_edit_object.bot_help= o;
});
     $(select_role_user_edit).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    temp_edit_object.bot_help= o;
});
}



vm.user_authorization_edit = function() {
  vm.message="";
  $('#bot_mngmnt_overall').hide();

    var registered_list =[];
    var flag=false;
    var email_flag= validateEmail(vm.emAil1_edit);
    var temp_edit=temp_edit_object;

    if(temp_edit){

      if(temp_edit.bot_info==='true'){
        flag_info = true;
        //vm.bot_type_info_edit(true);
      }
      else{
        flag_info = false;
        //vm.bot_type_info_edit(false);
      }
      if(temp_edit.bot_service==='true'){
        flag_service = true;
        //vm.bot_type_service_edit(true);
      }
      else{
        flag_service = false;
        //vm.bot_type_service_edit(false);
      }
      if(temp_edit.bot_help==='true'){
        flag_help = true;
        //vm.bot_type_help_edit(true);
      }
      else{
        flag_help = false;
        //vm.bot_type_help_edit(false);
      }
  
    if(flag_info === false&&flag_service === false&&flag_help === false){
      vm.error='Please select type of BOT that User Required';
      err_flg=true;
    }
     else if(!email_flag){
      vm.error='Please Enter Correct E-Mail Format';
      err_flg=true;
    }



    else {
      vm.error = '';
      if(flag_info){
      getValue_info=temp_edit.bot_info;  
      registered_list.push('Information BOT');
      /*if(getValue_info==='0'){
        vm.error="Please Select Information Bot Value";
        set_flag = false;
        err_flg=true;
      }    
      else{
        set_flag = true;
      }*/
    }
    else{
      getValue_info='false';
      
    }
      if(flag_service){
      getValue_service=temp_edit.bot_service;
      registered_list.push('Service BOT'); 
     /* if(getValue_service==='0'){
        vm.error="Please Select Service Bot Value";
        set_flag = false;
        err_flg=true;
      }  
      else{
        set_flag = true;
      }*/

    }
    else{
      getValue_service='false';
      
    }

      if(flag_help){
      getValue_help=temp_edit.bot_help;
      registered_list.push('Help BOT'); 
      /*if(getValue_help==='0'){
        vm.error="Please Select Help Bot Value";
        set_flag = false;
        err_flg=true;
      }  
      else{
        set_flag = true;
      }*/
    }
    else{
      getValue_help='false';
      
    }
      console.log(getValue_info);
      console.log(getValue_service);
      console.log(getValue_help);


//bots_authorized.append(data);
      if(set_flag){
        $('#mydiv').show(); 
            var user = {
      firstname: vm.firstname_edit,
      lastname: vm.lastname_edit,
      email:vm.emAil1_edit,
      empId:vm.empId_edit,
      Department:vm.Department_edit,
      Role:$(select_role_user_edit)["0"].children[1].firstChild.id,
      manager_ID:vm.manager_ID_edit,
      bot_info:flag_info,
      bot_service:flag_service,
      bot_help:flag_help
    };
    /*vm.change_drp('select1_edit','');
    vm.change_drp('select2_edit','');
    vm.change_drp('select3_edit','');*/
    vm.change_drp('select_role_user_edit','');

   $('html, body').animate({ scrollTop: 0 }, 2000);

   

      $http.post('/api/users/delete_user_management', user).then(function(result) {
        if(result.status===200){
          $http.post('/api/users/register_auth_mngmnt', user).then(function(result) {
            console.log(result);
            $('#mydiv').hide();
            if (result.status===201) {
              vm.error='E-mail already registered';
            }
            else if(result.status===200){
              $scope.edit_div = false;
              $scope.info_drpdwn=false;
              $scope.service_drpdwn=false;
              $scope.help_drpdwn=false;
              $scope.vm.info_chk=false;
              $scope.vm.service_chk=false;
              $scope.vm.help_chk=false;
              
              vm.edit_user();
              vm.message='Successfully Updated';
            }

            
          }).catch(function(error) {
              console.log(error);
            });

        }
       
}).catch(function(error) {
          console.log(error);
        });



      }
      else{
        if(err_flg===true){
           $('html, body').animate({ scrollTop: 0 }, 1000);
        }
      }
    }
  }
  else{
    vm.error="Please select the User again"
  }
  }




   vm.change_drp = function(divId,instanceId){
    var i = divId;
    var v = '';
    var o = instanceId;

if(divId==="select1_edit" || divId==="select3_edit" || divId==="select1" || divId==="select3" || divId==='select_role_user'){

    if(o===1||o==='1'){
      v='Less than    < 100';
    }
    if(o===2||o==="2"){
      v='Between  100 - 300';
    }
    if(o===3||o==="3"){
      v='Between  300 - 500';
    }
    if(o===4||o==="4"){
      v='Greater than > 500';
    }
    if(o==='null'||o===null||o===''||o===undefined){
      v='Select Category';
    }
  /*$(select1).on('click','.option li',function(){*/
    
   
}

  if(divId==="select2_edit" || divId==="select2"){
  if(o===1||o==='1'){
      v='Less than    < 50';
    }
    if(o===2||o==="2"){
      v='Between  50 - 100';
    }
    if(o===3||o==="3"){
      v='Between  100 - 200';
    }
    if(o===4||o==="4"){
      v='Greater than > 200';
    }
    if(o==='null'||o===null||o===''||o===undefined){
      v='Select Category';
    }
  }
    
    
  /*$(select1).on('click','.option li',function(){*/
    
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);

}

vm.change_drp_edit = function(divId,instanceId){
    var i = divId;
    var v = '';
    var o = instanceId;

    if(o===1||o==='1'){
      v='Admin';
    }
    if(o===2||o==="2"){
      v='Developer';
    }
    if(o===3||o==='3'){
      v='Tester';
    }
    if(o===4||o==="4"){
      v='System Integrator';
    }
    if(o===5||o==="5"){
      v='Bussiness Analyst';
    }

  /*$(select1).on('click','.option li',function(){*/
    
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);

}


  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
vm.myFunction = function(item) {
  
  var email= '';
  $('#bot_mngmnt_overall').hide();
  //var id_del= id;
  console.log(item.currentTarget);
  console.log(item.currentTarget.getAttribute("data-id"));
  var div_id_user = item.currentTarget.getAttribute("data-id");
  $rootScope.div_id_user = div_id_user;

  console.log('inside');
  //console.log(id_del);
  var user={
    empId:div_id_user
  };
  $('#mydiv').show();
  $http.get('/api/users/register_auth_mngmnt_bot').then(function(result) {
/*    for(var i=0;i<result.data.count;i++){
      if(div_id_user===result.data.Array[i]._id){
        email = result.data.Array[i].email;
      }
    }*/
    $http.post('/api/users/delete_user_management', user).then(function(result_1) {
      if(result_1){
        $('#mydiv').hide();
        vm.delete_user();

        

      }
      $('#mydiv').hide();
    });
  }).catch(function(error) {
      
      console.log(error);
  });
  
 
  
}



vm.myFunction_edit = function(item) {
  
  var email= '';
   $scope.edit_div= true;
   $('#bot_mngmnt_overall').hide();
  //var id_del= id;
  console.log(item.currentTarget);
  console.log(item.currentTarget.getAttribute("data-id"));
  var div_id_user = item.currentTarget.getAttribute("data-id");
  //$rootScope.div_id_user = div_id_user;

  console.log('inside');
  //console.log(id_del);
  var user={
    empId:div_id_user
  };
  $('#mydiv').show();
  $http.get('/api/users/register_auth_mngmnt_bot').then(function(result) {
    
    for(var i=0;i<result.data.count;i++){
      if(div_id_user===result.data.Array[i].empId){
        temp_edit_object = result.data.Array[i];
        vm.firstname_edit= result.data.Array[i].firstname;
        //vm.Role_edit= result.data.Array[i].Role;
        vm.emAil1_edit= result.data.Array[i].email;
        vm.empId_edit= result.data.Array[i].empId;
        vm.lastname_edit= result.data.Array[i].lastname;
        vm.manager_ID_edit= result.data.Array[i].manager_ID;
        vm.Department_edit= result.data.Array[i].Department;
        vm.change_drp_edit("select_role_user_edit",result.data.Array[i].Role);
        if(result.data.Array[i].bot_info==='true'){
          $scope.edit_s1 = true;
        }
        else{
          $scope.edit_s1 = false;
        }
        if(result.data.Array[i].bot_service==='true'){
          $scope.edit_s2 = true;
        }
        else{
          $scope.edit_s2 = false;
        }
        if(result.data.Array[i].bot_help==='true'){
          $scope.edit_s3 = true;
        }
        else{
          $scope.edit_s3 = false;
        }


       /* if(result.data.Array[i].Role!=='0'){
          $scope.edit_s1=true;
          $scope.info_drpdwn_edit = true;
          
        }
        else{
          $scope.edit_s1=false;
          $scope.info_drpdwn_edit = false;
        }*/

/*        if(result.data.Array[i].bot_service!=='0'){
          $scope.edit_s2=true;
          $scope.service_drpdwn_edit = true;
          vm.change_drp_edit("select2_edit",result.data.Array[i].bot_service);
        }
        else{
          $scope.edit_s2=false;
          $scope.service_drpdwn_edit = false;
        }

        if(result.data.Array[i].bot_help!=='0'){
          $scope.edit_s3=true;
          $scope.help_drpdwn_edit = true;
          vm.change_drp_edit("select3_edit",result.data.Array[i].bot_help);
        }
        else{
          $scope.edit_s3=false;
          $scope.help_drpdwn_edit = false;
        }*/
        $('#mydiv').hide();

      }
    }




          /*var temp = $compile(append_html)($scope); 
          angular.element(document.getElementById('append_drp_div')).append(temp);*/

    var div_id=result.data.Array[result.data.count-1].empId;

    
    $('html, body').animate({scrollTop: $("#edit_div").offset().top}, 2000);
 
   
  }).catch(function(error) {
      
      console.log(error);
  });
  //$('#mydiv').hide();
 
  
}



vm.show_usr_mngmnt = function(){
  //$scope.user_mngmnt = true;
  //$scope.bot_mngmnt = false;
}
 

vm.show_bot_mngmnt_info = function(){
  $('#bot_mngmnt_overall').hide();
  vm.message='';
  $scope.delete_user = false;
  $scope.Integration_mngmnt = false;
  $scope.user_mngmnt = false;
  $scope.bot_mngmnt = true;
  var info_text_html ='';
  var info_text_html_script= '';
  var div_info_html ='';
  var append_div_info_html='';
  $('#mydiv').show();
  document.getElementById('bot_mngmnt_html').innerHTML='';
  $http.get('/api/users/get_bot_script_saved').then(function(result) {
    console.log(result.data.count);
    var cnt = result.data.count;
    if(result.data.Array){
      for(var i=0;i<cnt;i++){
        if(result.data.Array[i].bot_name==='Information Bot'){
          var id=result.data.Array[i]._id;
          info_text_html='<label style="position: relative;height: 115px;left: 420px;">'+result.data.Array[i].bot_user_name+'</label><img src="/images/chatbot_1.jpg" style="position: relative;height: 115px;left: 320px;top: 85px;">  <button type="submit" class="rgstr_btn" data-id="'+id+'" ng-click="vm.test_bot($event)" style="position: relative;top: 185px;left: 160px;">Test</button>  <button type="submit" data-id="'+id+'" ng-model="div_id" class="rgstr_btn" style="position: relative;top: 185px;left: 160px;" ng-click="vm.deploy_bot($event)">Deploy</button>';
          //info_text_html_script=result.data.Array["0"].bot_script;
          //div_info_html= info_text_html.concat(info_text_html_script);
          append_div_info_html= append_div_info_html.concat(info_text_html);
          
        }
        
      }
       var temp = $compile(append_div_info_html)($scope); 
       angular.element(document.getElementById('bot_mngmnt_html')).append(temp);
            var div = angular.element("delete_innerhtml");
   /*div.bind('click', vm.test_bot());
   div.bind('click', vm.deploy_bot());*/
    }

    $('#mydiv').hide();



  });


}


vm.show_bot_mngmnt_support = function(){
  $('#bot_mngmnt_overall').hide();
  vm.message='';
  $scope.delete_user = false;
  $scope.Integration_mngmnt = false;
  $scope.user_mngmnt = false;
  $scope.bot_mngmnt = true;
  var info_text_html ='';
  var info_text_html_script= '';
  var div_info_html ='';
  var append_div_info_html='';
  $('#mydiv').show();
  document.getElementById('bot_mngmnt_html').innerHTML='';
  $http.get('/api/users/get_bot_script_saved').then(function(result) {
    console.log(result.data.count);
    var cnt = result.data.count;
    if(result.data.Array){
      for(var i=0;i<cnt;i++){
        if(result.data.Array[i].bot_name==='Service Bot'){
          var id=result.data.Array[i]._id;
          info_text_html='<label style="position: relative;height: 115px;left: 420px;">'+result.data.Array[i].bot_user_name+'</label><img src="/images/chatbot_1.jpg" style="position: relative;height: 115px;left: 320px;top: 85px;">  <button type="submit" class="rgstr_btn" data-id="'+id+'" ng-click="vm.test_bot($event)" style="position: relative;top: 185px;left: 160px;">Test</button>  <button type="submit" data-id="'+id+'" ng-model="div_id" class="rgstr_btn" style="position: relative;top: 185px;left: 160px;" ng-click="vm.deploy_bot($event)">Deploy</button>';
          //info_text_html_script=result.data.Array["0"].bot_script;
          //div_info_html= info_text_html.concat(info_text_html_script);
          append_div_info_html= append_div_info_html.concat(info_text_html);
          
        }
        
      }
       var temp = $compile(append_div_info_html)($scope); 
       angular.element(document.getElementById('bot_mngmnt_html')).append(temp);
            var div = angular.element("delete_innerhtml");
   /*div.bind('click', vm.test_bot());
   div.bind('click', vm.deploy_bot());*/
    }



    $('#mydiv').hide();

  });


}

vm.show_bot_mngmnt_help = function(){
  $('#bot_mngmnt_overall').hide();
  vm.message='';
  $scope.delete_user = false;
  $scope.Integration_mngmnt = false;
  $scope.user_mngmnt = false;
  $scope.bot_mngmnt = true;
  var info_text_html ='';
  var info_text_html_script= '';
  var div_info_html ='';
  var append_div_info_html='';
  document.getElementById('bot_mngmnt_html').innerHTML='';
  $('#mydiv').show();
  $http.get('/api/users/get_bot_script_saved').then(function(result) {
    console.log(result.data.count);
    var cnt = result.data.count;
    if(result.data.Array){
      for(var i=0;i<cnt;i++){
        if(result.data.Array[i].bot_name==='Help Bot'){
          var id=result.data.Array[i]._id;
          info_text_html='<label style="position: relative;height: 115px;left: 420px;">'+result.data.Array[i].bot_user_name+'</label><img src="/images/chatbot_1.jpg" style="position: relative;height: 115px;left: 320px;top: 85px;">  <button type="submit" class="rgstr_btn" data-id="'+id+'" ng-click="vm.test_bot($event)" style="position: relative;top: 185px;left: 160px;">Test</button>  <button type="submit" data-id="'+id+'" ng-model="div_id" class="rgstr_btn" style="position: relative;top: 185px;left: 160px;" ng-click="vm.deploy_bot($event)">Deploy</button>';
          //info_text_html_script=result.data.Array["0"].bot_script;
          //div_info_html= info_text_html.concat(info_text_html_script);
          append_div_info_html= append_div_info_html.concat(info_text_html);
          
        }
        
      }
       var temp = $compile(append_div_info_html)($scope); 
       angular.element(document.getElementById('bot_mngmnt_html')).append(temp);
            var div = angular.element("delete_innerhtml");
   /*div.bind('click', vm.test_bot());
   div.bind('click', vm.deploy_bot());*/
    }


    $('#mydiv').hide();


  });


}




vm.show_Integration_mngmnt = function(){
  $('#bot_mngmnt_overall').hide();
  $scope.user_mngmnt = false;
  $scope.bot_mngmnt = false;
  var inti_html_checkbox = '';
  var append_div_inti_html='';
  document.getElementById('checkbox_integration_html').innerHTML='';
  $('#mydiv').show();
  $http.get('/api/users/admin_dashboard_integration').then(function(result_inte_get) {
    if(result_inte_get){
      console.log(result_inte_get);
      services_list = result_inte_get;
      for(var i=0;i<result_inte_get.data.length;i++){
        inti_html_checkbox = '<label class="checkbox" id="'+result_inte_get.data[i]+'" style="font-size:16px;position: relative;left: 35%;bottom: 10px;"><input type="checkbox" style="bottom:3px" ng-model="'+result_inte_get.data[i]+'" ng-change="vm.check_count('+result_inte_get.data[i]+')">'+result_inte_get.data[i]+'</label></br>';
        append_div_inti_html= append_div_inti_html.concat(inti_html_checkbox);
      }
      var temp_chk = $compile(append_div_inti_html)($scope); 
      angular.element(document.getElementById('checkbox_integration_html')).append(temp_chk);
      var ser={
        services_name:result_inte_get.data[0]
      };
      $http.post('/api/users/admin_dashboard_integration_ser_hsted',ser).then(function(result_inte_get_ser_hstd) {
        vm.serviceHosted=result_inte_get_ser_hstd.data.IP_address;
        vm.dommainName=result_inte_get_ser_hstd.data.IP_address;
        $http.get('/api/users/get_usr_integration_service_saved').then(function(result_inte_ser_saved) {
          if(result_inte_ser_saved){
            console.log(result_inte_ser_saved);
            if(result_inte_ser_saved.data.Array.length===0){
              $scope.read_inti =true;
              $scope.readwrite_inti =false;
              $scope.submit = true;
            }
            else{
               $scope.read_inti =false;
               vm.enterpriseIP1 = result_inte_ser_saved.data.Array["0"].enterpriseIP;
               vm.enterpriseDomain1 = result_inte_ser_saved.data.Array["0"].enterpriseDomain;
               vm.accessUser1 = result_inte_ser_saved.data.Array["0"].accessUser;
               vm.access_password1 = result_inte_ser_saved.data.Array["0"].access_password;
               vm.dbname1 = result_inte_ser_saved.data.Array["0"].dbname;
               vm.enterpriseIP = result_inte_ser_saved.data.Array["0"].enterpriseIP;
               vm.enterpriseDomain = result_inte_ser_saved.data.Array["0"].enterpriseDomain;
               vm.accessUser = result_inte_ser_saved.data.Array["0"].accessUser;
               vm.access_password = result_inte_ser_saved.data.Array["0"].access_password;
               vm.dbname = result_inte_ser_saved.data.Array["0"].dbname;
               var selected = result_inte_ser_saved.data.Array["0"].services_requested;
               for(var i=0;i<selected.length;i++){
                document.getElementById(selected[i]).firstChild.checked=true;
               }
               //vm.enterpriseIP1 = result_inte_ser_saved.data.Array.;
               $scope.readwrite_inti =true;
               $scope.submit = false;
               $scope.edit=true;
               $scope.cancel=false;
            }
          }
          $('#mydiv').hide();
        });
        $scope.Integration_mngmnt = true;
      }).catch(function(error) {
      
      console.log(error);
     });
      
    }


  }).catch(function(error) {
      
      console.log(error);
  });

  
}

vm.test_bot = function(item){
  $('#bot_mngmnt_overall').hide();

  console.log(item.currentTarget);
  console.log(item.currentTarget.getAttribute("data-id"));
  var div_id = item.currentTarget.getAttribute("data-id");
  $rootScope.div_id = div_id;
  $location.path('/store');
  $rootScope.div_id = div_id;
}

vm.deploy_bot = function(item){
  $('#bot_mngmnt_overall').hide();
  var div_id = item.currentTarget.getAttribute("data-id");
  $rootScope.div_id = div_id;
  $location.path('/final_store');
}

vm.admin_dashboard = function(){
  var append_div_info_html;
  $('#mydiv').show();
  $http.get('/api/users/admin_dashboard').then(function(result) {

    if(result.status===200){

      console.log(result);
      var user={
        data_user:result.data
      };
      $http.post('/api/users/admin_dashboard',user).then(function(result_scrpt) {

        console.log(result_scrpt);
        var cnt = result_scrpt.data.count;
        if(result_scrpt.data.Array){
          for(var i=0;i<cnt;i++){
            if(result_scrpt.data.Array[i].bot_name==='Help Bot'){
              var id=result_scrpt.data.Array[i]._id;
              info_text_html='<label style="position: relative;height: 115px;left: 420px;">'+result_scrpt.data.Array[i].bot_user_name+'</label><img src="/images/chatbot_1.jpg" style="position: relative;height: 115px;left: 320px;top: 85px;">  <button type="submit" class="rgstr_btn" data-id="'+id+'" ng-click="vm.test_bot($event)" style="position: relative;top: 185px;left: 160px;">Test</button>  <button type="submit" data-id="'+id+'" ng-model="div_id" class="rgstr_btn" style="position: relative;top: 185px;left: 160px;" ng-click="vm.deploy_bot($event)">Deploy</button>';
              //info_text_html_script=result.data.Array["0"].bot_script;
              //div_info_html= info_text_html.concat(info_text_html_script);
              append_div_info_html= append_div_info_html.concat(info_text_html);
              
            }
            
          }
           var temp = $compile(append_div_info_html)($scope); 
           angular.element(document.getElementById('bot_mngmnt_html_overall')).append(temp);
           $('#mydiv').hide();
                var div = angular.element("delete_innerhtml");

        }

      });

    }
    else{
      console.log("Not Admin");
    }


  }).catch(function(error) {
      
      console.log(error);
  });

}

vm.check_count = function($event){
  if($event){
     count_checked++;
    }
    if(!$event){
      count_checked--;
    } 
}

vm.submit_integtn = function(){
  var serviceHosted = vm.serviceHosted;
  var dommainName = vm.dommainName;
  var enterpriseIP = vm.enterpriseIP;
  var enterpriseDomain = vm.enterpriseDomain;
  var accessUser = vm.accessUser;
  var access_password = vm.access_password;
  var dbname = vm.dbname;
  var service_selected =[];
  for(var i=0;i<services_list.data.length;i++){
      if(document.getElementById(services_list.data[i]).firstChild.checked===true){
        service_selected.push(services_list.data[i]);
      }
    }
  console.log(service_selected);
  if( service_selected.length===0 || service_selected.length===undefined){
    vm.error="Please select any of the services";
    vm.message="";
    err_flg=true;
  }
  else{
    vm.error=''
    err_flg=false;
    $('#mydiv').show();
    var inte_odj = {
      IP_address : serviceHosted,
      enterpriseIP : enterpriseIP,
      enterpriseDomain : enterpriseDomain,
      accessUser : accessUser,
      access_password : access_password,
      dbname : dbname,
      services_requested : service_selected,
      dommainName : dommainName
    }
    $http.post('/api/users/Integration_delete',inte_odj).then(function(result_inte_get_ser_hstd_del) {   
      $http.post('/api/users/admin_dashboard_integration_usr_submit',inte_odj).then(function(result_scrpt) {
        
        vm.enterpriseIP='';
        vm.enterpriseDomain='';
        vm.accessUser='';
        vm.access_password='';
        vm.dbname='';
        /*for(var i=0;i<service_selected.length;i++){
          document.getElementById(service_selected[i]).firstChild.checked = false;
        }*/
        vm.message="Successfully Submitted";
        vm.show_Integration_mngmnt();
        $scope.cancel = true;
        $('html, body').animate({ scrollTop: 0 }, 1000);
        $('#mydiv').hide();
      }).catch(function(error) {
        
          console.log(error);
      });
    }).catch(function(error) {
      
        console.log(error);
    });

  }
   if(err_flg===true){
    $('html, body').animate({ scrollTop: 0 }, 1000);
  }
}

vm.notAdmin = function(){
  $http.get('/api/users/login').then(function(result_usrname) {
    if(result_usrname){
      var usr_login=result_usrname.data.username;
      var domain = usr_login.split('@')[1];
      if(domain==='intellisofttech.com' || domain === 'intelliasiasoft.com' || domain === "datamorphix.com" || domain === "admin.com"){
        $('#select_user1').show();
      }
      else{
        $('#select_user1').hide();
      }
    }
  }).catch(function(error) {
      
        console.log(error);
  });
}


vm.edit_integtn = function(){
  $('#mydiv').show();
  $scope.edit = false;
  $scope.read_inti =true;
  $scope.readwrite_inti =false;
  $scope.submit=true;
  $scope.cancel = true;
  $('#mydiv').hide();

}

vm.cancel_integtn = function(){
  $('#mydiv').show();
  $scope.edit = true;
  $scope.read_inti =false;
  $scope.readwrite_inti =true;
  $scope.submit=false;
  $scope.cancel = false;
  $('#mydiv').hide();
}

}




