angular.module('meanchat').controller('RegisterController', RegisterController);

function RegisterController($http, $scope, $location) {
  var vm = this;
  $scope.info_drpdwn = false;
  $scope.service_drpdwn = false;
  $scope.help_drpdwn = false;
  $scope.vm = {};
  var flag_info = false;
  var flag_service = false;
  var flag_help = false;
  var getValue_info ='';
  var getValue_service = '';
  var getValue_help = '';
  var set_flag = true;
  $('#mydiv').hide(); 

/*$('body').on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});*/

vm.change = function(){
  $(register_select1).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
  $(register_select2).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
    $(register_select3).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
    $(reg_plan_select1).on('click','.option li',function(){
    var i = $(this).parents('.select').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
});
}

vm.bot_type_info = function($event) {
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

  vm.bot_type_service = function($event) {
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


  vm.bot_type_help = function($event) {
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

  

  vm.register = function() {

    var registered_list =[];
    var flag=false;
    var set_flag = true;
    var email_flag= validateEmail(vm.eMail);

    if(!vm.username){
      vm.error='Please Enter Username';
    }
    if(!vm.username && !vm.password){
      vm.error='Please Enter Username and Password';
    }
    if(!vm.eMail && !vm.password){
      vm.error='Please Enter E-Mail and Password';
    }
    if(!vm.eMail && !vm.passwordRepeat){
      vm.error='Please Enter E-Mail and Repeat-Password';
    }
    if(!vm.eMail && !vm.username){
      vm.error='Please Enter Username and E-Mail';
    }
    if(!vm.username && !vm.password && !vm.eMail){
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
      /*getValue_info=$(register_select1)["0"].children["0"].firstChild.id;  */
      getValue_info = 1;
      registered_list.push('Information BOT');
      /*if(!getValue_info){
        vm.error="Please Select Information Bot Instance Value";
        set_flag = false;
      }    */
    }
    else{
      getValue_info=0;
    }
      if(flag_service){
      /*getValue_service=$(register_select2)["0"].children["0"].firstChild.id;*/
      getValue_service=1;
      registered_list.push('Service BOT'); 
      /*if(!getValue_service){
        vm.error="Please Select Service Bot Instance Value";
        set_flag = false;
      }  */
    }
    else{
      getValue_service=0;
    }

      if(flag_help){
      /*getValue_help=$(register_select3)["0"].children["0"].firstChild.id;*/
      getValue_help=1;
      registered_list.push('Help BOT'); 
     /* if(!getValue_help){
        vm.error="Please Select Help Bot Instance Value";
        set_flag = false;
      }  */
    }
    else{
      getValue_help=0;
    }
      console.log(getValue_info);
      console.log(getValue_service);
      console.log(getValue_help);
      var get_plan=$(reg_plan_select1)["0"].children["0"].firstChild.id;
      if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match.';
      } 

      else if(flag_help===false && flag_service ===false && flag_info === false){
        vm.error="Please Select Type of BOT Required";
        set_flag = false;
      }
      else if(get_plan ==='' || get_plan === undefined){
        vm.error= 'Please Select Plan-type'; 
        set_flag = false;
      }

      else if(set_flag){
        $('#mydiv').show();

            var user = {
      username: vm.username,
      password: vm.password,
      email:vm.eMail,
      contact:vm.contact,
      organization:vm.org_username,
      plan:get_plan
    };

    var user_info = {
      username: vm.username,
      bot_name:'Information BOT',
      number_instance:getValue_info
    };

        var user_service = {
      username: vm.username,
      bot_name:'Service BOT',
      number_instance:getValue_service      
    };

     var user_help = {
      username: vm.username,
       bot_name:'Help BOT',
      number_instance:getValue_help
    };

     var user_email = {
      username: vm.username,
      email:vm.eMail,
      organization:vm.org_username,
      registered_list:registered_list
    };


        $http.post('/api/users/register_auth', user).then(function(result_auth) {
        console.log(result_auth); 
        if (result_auth.data){       
        var usrnme=result_auth.data.username;
        if (usrnme===vm.username){
          flag=false;
        }
        else{
          flag=true;
        }
      }
      else{
        flag=true;
      }
        if(flag){
       
        
        //callback(null, result_auth);
        //$location.path('/store');
        $http.post('/api/users/register', user).then(function(result) {
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
          $http.post('/api/users/register_email', user_email).then(function(result) {


            }).catch(function(error) {
          console.log(error);
        });
            $('#mydiv').hide(); 
          vm.message = 'Successfully Subscribed, One of our consultant will contact you.';
          //document.getElementById('id_register').style.display='block';
          vm.error = '';
        }).catch(function(error) {
          console.log(error);
        });
       
      }
      else{
        
        vm.error = 'User Name is already taken.....Please try other User Name';
        $('#mydiv').hide(); 
      }
       }).catch(function(error) {
      console.log(error);
    
    });


      }
      if(set_flag === false){
        $('html, body').animate({ scrollTop: 0 }, 1000);
      }
    }
  }


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

    vm.clear = function(){

    vm.username='';
    vm.password='';
    vm.passwordRepeat='';
    vm.eMail='';
    vm.error='';
    document.getElementById('id_register').style.display='none';
    $location.path('/');
  }


};
