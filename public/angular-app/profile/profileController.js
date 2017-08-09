angular.module('meanchat').controller('PLoginController', PLoginController);

function PLoginController($route,$scope,$http, $routeParams,$compile,$location, $window, AuthFactory, jwtHelper) {
  var vm = this;
  $scope.readwrite = false;
  $scope.read = false;
  $scope.read_drp= false;
  $scope.readwrite_drp= false;
  $scope.cancel = false;
  var flag_info = false;
  var flag_service = false;
  var flag_help = false;
  var getValue_info ='';
  var getValue_service = '';
  var getValue_help = '';
  var set_flag = true;
  
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


    vm.profile = function(){
    	//vm.username = 'fffffffff';


    	$scope.readwrite = false;
    	$scope.read = true;
    	$scope.readwrite_drp = false;

    	var length='';
    	var append_html ='';
    	var drpdwn_txt = '';
    	var user = {
    		username:'1'
    	};
    	$('#mydiv').show(); 
    	$http.post('/api/users/get_script_deploy', user).then(function(result) {
    		if(result.status===200){
    			vm.contact=result.data.contact;
    			vm.eMail=result.data.email;
    			vm.org_username=result.data.organization;
    			vm.username=result.data.username;
    			vm.password= 'xxxxxxxxxx';
    			
    			vm.username1=result.data.username;
    			vm.contact1=result.data.contact;
    			vm.eMail1=result.data.email;
    			vm.org_username1=result.data.organization;
    			/*document.getElementById('append_drp_div').innerHTML='';*/
    			
    			length = result.data.bot_registered.length;
    			 for(var i=0;i<length;i++){
            
            if(result.data.bot_registered[i].bot_name==='Information BOT'){
              drpdwn_txt = '<li style="position: relative;left: 15px;font-size:12px;" ><c >Information Bot</c></li>';
              var v= '';
              append_html = append_html.concat(drpdwn_txt);
              $scope.info_drpdwn = true;
              $scope.pf_s1=true;
              vm.change_drp("profile_select1",result.data.bot_registered[i].number_instance);
              flag_info= true;
             /* if(result.data.bot_registered[i].number_instance===1){
              	v= 'One'
              }*/

				
				  
            }  

            if(result.data.bot_registered[i].bot_name==='Help BOT'){
              drpdwn_txt = '<li style="position: relative;left: 15px;font-size:12px;"><c >Help BOT</c></li>';
              append_html = append_html.concat(drpdwn_txt);
              $scope.help_drpdwn = true;
              $scope.pf_s3=true;
              vm.change_drp("profile_select3",result.data.bot_registered[i].number_instance);
              flag_help = true;

              //$(profile_select3).on('click','.option li',function(){

            }
            if(result.data.bot_registered[i].bot_name==='Service BOT'){
              drpdwn_txt = '<li style="position: relative;left: 15px;font-size:12px;" ><c >Service Bot</c></li>';
              append_html = append_html.concat(drpdwn_txt);
              $scope.service_drpdwn = true;
              $scope.pf_s2=true;
              vm.change_drp("profile_select2",result.data.bot_registered[i].number_instance);
              flag_service = true;
/*              $(profile_select2).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = result.data.bot_registered[i].number_instance;
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});*/
            }
        }	


        	var temp = $compile(append_html)($scope); 
          angular.element(document.getElementById('append_drp_div')).append(temp);


    			// '<div style="position:absolute;left:46%;max-width:20%;top:-15%;"><div class="input-group-btn select"  >    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">Assigned Bots</span> <span class="caret"></span></button>    <ul class="dropdown-menu" style="width: 172px;" role="menu">'+append_html+'</ul></div></div>'

    			$scope.read_drp = true;
    			$scope.edit = true;
    			$scope.cancel = false;
    			$scope.edit_update = false;
    		}
    		$('#mydiv').hide(); 
    	});
    }

    vm.edit = function(){
    	$scope.edit = false;
    	$scope.read = false;
    	$scope.read_drp = false;
    	$scope.readwrite = true;
    	$scope.readwrite_drp = true;
    	$scope.edit_update = true;
    	$scope.cancel = true;
    	$scope.edit_update = true;



    }


    vm.changepswrd = function(){
    	document.getElementById('passwrd_change').style.display='block';
    }

    vm.passwrd_change = function(){
    	  	 if (vm.newpassword !== vm.repeatpassword) {
        vm.error = 'Please make sure the passwords match.';
      }
      else{
      	var user = {      
      password: vm.currentpassword,
      //email:my_email
    };
    var user_pswd={
    	password:vm.newpassword
    };
    $('#mydiv').show(); 
      	$http.post('/api/users/pswrd_change_user', user).then(function(result_auth) {
      		if(result_auth.status===200){
      			$http.post('/api/users/chng_password_update', user_pswd).then(function(result_auth_update) {
      				if(result_auth_update.status===201){
      					document.getElementById('passwrd_change').style.display='none';
      					vm.message="Successfully password updated"
      					vm.error="";
      					$('#mydiv').hide(); 
      				}

      			}).catch(function(error) {
      
      console.log(error);
    });
      		}

      		if(result_auth.status===201){
      			vm.error = "Incorrect Current Password";
      			$('#mydiv').hide();
      		}


      		
      	}).catch(function(error) {
      
      console.log(error);
    });
      }
    }
  	
  	  vm.clear = function(){
   
  }

  vm.cancel_update = function(){
  	document.getElementById("append_drp_div").innerHTML='';
  	vm.profile();
  	
  }

vm.change = function(){
	$(profile_select1).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
  $(profile_select2).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
    $(profile_select3).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
}


  vm.change_drp = function(divId,instanceId){

  	var i = divId;
    var v = '';
    var o = instanceId;

  	if(divId==="profile_select1" || divId==="profile_select3"){

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
	/*$(select1).on('click','.option li',function(){*/
    
   
}

	if(divId==="profile_select2"){
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
	}
	 $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);

}

  vm.profile_update = function(){


    var registered_list =[];
    var flag=false;
    var email_flag= validateEmail(vm.eMail);

    if(!vm.username1){
      vm.error='Please Enter Username';
    }
    if(!vm.username1 && !vm.password){
      vm.error='Please Enter Username and Password';
    }
    if(!vm.eMail && !vm.password){
      vm.error='Please Enter E-Mail and Password';
    }
    if(!vm.eMail && !vm.passwordRepeat){
      vm.error='Please Enter E-Mail and Repeat-Password';
    }
    if(!vm.eMail && !vm.username1){
      vm.error='Please Enter Username and E-Mail';
    }
    if(!vm.username1 && !vm.password && !vm.eMail){
      vm.error='Please Enter Username,Password and E-Mail';
    }

    else if(!vm.password){
      vm.error='Please Enter Password';
    }
    else if(!vm.passwordRepeat){
      vm.error='Please Enter Repeat-Password';
    }
    else if(!vm.eMail){
      vm.error='Please Enter E-Mail';
    }
    else if(!vm.contact){
      vm.error='Please Enter Contact Number';
    }
    else if(!vm.org_username){
      vm.error='Please Enter Organisation Name';
    }
    else if(!email_flag){
      vm.error='Please Enter Correct E-Mail Format';
    }

    else if(flag_info === false&&flag_service === false&&flag_help === false){
      vm.error='Please Select Type Of BOT You Required';
    }
    var contact_num = vm.contact;
    var reg_contact =/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;
/*    if (reg_contact.match(contact_num)) {
      console.log('1');
      vm.error='';
    }
    else if(!(reg_contact.match(contact_num))){
      vm.error='Enter The Correct Number';
    }*/

  /*  if (reg_contact.test(contact_num)) {
      //vm.error='';
    }*/
    if(reg_contact.test(contact_num) === false){
      vm.error='Enter The Correct Number';
    }



    else {
      vm.error = '';
      if(flag_info){
      getValue_info=$(profile_select1)["0"].children["0"].firstChild.id;  
      registered_list.push('Information BOT');
      if(!getValue_info){
        vm.error="Please Select Information Bot Instance Value";
        set_flag = false;
      }    
    }
    else{
      getValue_info=0;
    }
      if(flag_service){
      getValue_service=$(profile_select2)["0"].children["0"].firstChild.id;
      registered_list.push('Service BOT'); 
      if(!getValue_service){
        vm.error="Please Select Service Bot Instance Value";
        set_flag = false;
      }  
    }
    else{
      getValue_service=0;
    }

      if(flag_help){
      getValue_help=$(profile_select3)["0"].children["0"].firstChild.id;
      registered_list.push('Help BOT'); 
      if(!getValue_help){
        vm.error="Please Select Help Bot Instance Value";
        set_flag = false;
      }  
    }
    else{
      getValue_help=0;
    }
      console.log(getValue_info);
      console.log(getValue_service);
      console.log(getValue_help);
      /*if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      } 
*/
// 

     if(set_flag){
        $('#mydiv').show(); 
            var user = {
      username: vm.username1,
      password: vm.password,
      email:vm.eMail,
      contact:vm.contact,
      organization:vm.org_username
    };

    var user_info = {
      username: vm.username1,
      bot_name:'Information BOT',
      number_instance:getValue_info
    };

        var user_service = {
      username: vm.username1,
      bot_name:'Service BOT',
      number_instance:getValue_service      
    };

     var user_help = {
      username: vm.username1,
       bot_name:'Help BOT',
      number_instance:getValue_help
    };

     var user_email = {
      username: vm.username1,
      email:vm.eMail,
      organization:vm.org_username,
      registered_list:registered_list
    };


       /* $http.post('/api/users/register_auth', user).then(function(result_auth) {
        console.log(result_auth); */
        /*if (result_auth.data){       
        var usrnme=result_auth.data.username;
        if (usrnme===vm.username1){
          flag=false;
        }
        else{
          flag=true;
        }
      }
      else{
        flag=true;
      }*/
       // if(flag){
       
        
        //callback(null, result_auth);
        //$location.path('/store');
        $http.post('/api/users/register_update', user).then(function(result) {
          console.log(result);
          $http.post('/api/users/register_delete_bot', user).then(function(result) {
          	console.log(result);
          if(flag_info){
          $http.post('/api/users/register_bot', user_info).then(function(result) {


            }).catch(function(error) {
          console.log(error);
        });
          }
            if(flag_service){
                    $http.post('/api/users/register_bot', user_service).then(function(result) {


            }).catch(function(error) {
          console.log(error);
        });
        }
              if(flag_help){
                  $http.post('/api/users/register_bot', user_help).then(function(result) {


            }).catch(function(error) {
          console.log(error);
        });  
          }
          $http.post('/api/users/register_update_email', user_email).then(function(result) {


            }).catch(function(error) {
          console.log(error);
        });
            $('#mydiv').hide(); 
          vm.message = 'Profile Successfully updated.';
          //document.getElementById('id_register').style.display='block';
          vm.error = '';
        }).catch(function(error) {
          console.log(error);
        });
        }).catch(function(error) {
          console.log(error);
        });
     // }
      /*else{
        
        vm.error = 'User Name is already taken.....Please try other User Name';
        $('#mydiv').hide(); 
      }*/
      /* }).catch(function(error) {
      console.log(error);
    
    });*/


      }
    }
  }


  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

}
