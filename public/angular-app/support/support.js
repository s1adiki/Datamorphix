angular.module('meanchat').controller('supportcontroller', supportcontroller);


function supportcontroller($route,$scope,$http, $routeParams,$compile,$location, $window, AuthFactory, jwtHelper) {
	var vm = this;
	var flag_info = false;
	var flag_service = false;
	var flag_help = false;
	$('#mydiv_support').hide(); 
	vm.bot_type_info_support = function($event) {
               // alert($event);

            if($event){
              //$scope.info_drpdwn = true;
              flag_info = true;
            }
            if(!$event){
               //$scope.info_drpdwn = false;
               flag_info = false;
            }
          }

  vm.bot_type_service_support = function($event) {
               // alert($event);

            if($event){
              //$scope.service_drpdwn = true;
              flag_service = true;
            }
            if(!$event){
               //$scope.service_drpdwn = false;
               flag_service = false;
            }
          }


  vm.bot_type_help_support = function($event) {
               // alert($event);

            if($event){
              //$scope.help_drpdwn = true;
              flag_help = true;
            }
            if(!$event){
               //$scope.help_drpdwn = false;
               flag_help = false;
            }
          }

	vm.support_details = function(){
		var user = {
    		username:'1'
    	}; 
		$http.post('/api/users/get_script_deploy', user).then(function(result) {

			vm.usrnme_sprt = result.data.username;
			vm.eMaiLcontact_sprt = result.data.email;
			vm.contact_sprt = result.data.contact;
		});
	}

	vm.change_support = function(){
      $(support_select1).on('click','.option li',function(){
        var i = $(this).parents('.select').attr('id');
        var v = $(this).children().text();
        var o = $(this).attr('id');
        $('#'+i+' .selected').attr('id',o);
        $('#'+i+' .selected').text(v);
      });
    }

    vm.change_drp_support = function(divId,instanceId){

    var i = divId;
    var v = 'Select Priority';
    var o = instanceId;
    //$('#'+i+'.selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    }


    vm.contact_intellisoft_support = function(){
    	var contact_bot = [];

 /* var user = {  
  	  name : vm.usrnme,   
      email:vm.eMaiLcontact,
      message:vm.MesSage
    };*/
	    console.log("1");
	    if(flag_info){
	      contact_bot.push("Information BOT");
	    }
	    if(flag_service){
	      contact_bot.push("Service BOT");
	    }
	    if(flag_help){
	      contact_bot.push("Custom BOT");
	    }
//console.log(user);
    /* $http.post('/api/users/password', user).then(function(result) {*/
     
          /*if (result.data){*/
       

        var mailOptions = {

	        to: 'rockingmanoj5674@gmail.com',
	        from:vm.eMaiLcontact_sprt ,
	        subject: 'Customer Need Support',
	        text: vm.MesSage_support,
	        contact:vm.contact_sprt,
	        Priority:$(support_select1)["0"].children["0"].firstChild.innerHTML,
	        bot_request:contact_bot
	      };
	    var contact_num = vm.contact_sprt;
	    var reg_contact =/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;
	    if(reg_contact.test(contact_num) === false){
	      vm.error='Enter The Correct Number';
	    }
	    else if(flag_info === false&&flag_service === false&&flag_help === false){
	      vm.error='Please Select Type Of BOT You Required';
	    }

	    else {
       	$('#mydiv').show(); 
      	$http.post('/api/users/frget_email_support', mailOptions).then(function(result_data) {



	        console.log("mail sent");
	        vm.error='';
	        vm.MesSage_support = '';
	        
	        $scope.vm.info_chk_support=false;
	        $scope.vm.service_chk_support=false;
	        $scope.vm.help_chk_support=false;
	       
	        vm.change_drp_support('support_select1','');
	      	document.getElementById("support_sent").innerHTML="<b>Message Sent</b>";
		        //document.getElementById('id_contactUs').style.display='block';
		        

	        $('#mydiv').hide(); 
	         
	      }).catch(function(error) {
	      
	      console.log(error);
	    });
      

      	

         /* }*/

    
  /*  }).catch(function(error) {
      
      console.log(error);
    });*/
		}
   
  	}
}