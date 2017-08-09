angular.module('meanchat').controller('contactController', contactController);

function contactController($http, $scope, $location) {
  var vm = this;
    var flag_info = false;
  var flag_service = false;
  var flag_help = false;

  $('#mydiv_contact').hide(); 

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


    vm.change = function(){
      $(contact_select1).on('click','.option li',function(){
        var i = $(this).parents('.select').attr('id');
        var v = $(this).children().text();
        var o = $(this).attr('id');
        $('#'+i+' .selected').attr('id',o);
        $('#'+i+' .selected').text(v);
      });
    }


vm.change_drp = function(divId,instanceId){

    var i = divId;
    var v = 'Select Type';
    var o = instanceId;
    //$('#'+i+'.selected').attr('id',o);
    $('#'+i+' .selected').text(v);
    }




  vm.contact_intellisoft = function(){
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
      contact_bot.push("Help BOT");
    }
//console.log(user);
    /* $http.post('/api/users/password', user).then(function(result) {*/
     
          /*if (result.data){*/
       

            var mailOptions = {
        to: 'rockingmanoj5674@gmail.com',
        from:vm.eMaiLcontact ,
        subject: 'Customer Need Help',
        text: vm.MesSage,
        contact:vm.contact_cn,
        Organization:$(contact_select1)["0"].children["0"].firstChild.innerHTML,
        bot_request:contact_bot
      };
      var contact_num = vm.contact_cn;
    var reg_contact =/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/;
    if(reg_contact.test(contact_num) === false){
      vm.error='Enter The Correct Number';
    }
    else if(flag_info === false&&flag_service === false&&flag_help === false){
      vm.error='Please Select Type Of BOT You Required';
    }

    else {
       $('#mydiv_contact').show(); 
      $http.post('/api/users/frget_email', mailOptions).then(function(result_data) {

        console.log("mail sent");
        //document.getElementById('id_contactUs').style.display='block';
        

        $('#mydiv_contact').hide(); 
         
      }).catch(function(error) {
      
      console.log(error);
    });
      vm.eMaiLcontact = '';
      vm.error='';
        vm.MesSage = '';
        vm.usrnme = '';
        $scope.vm.info_chk=false;
        $scope.vm.service_chk=false;
        $scope.vm.help_chk=false;
        vm.contact_cn='';
        vm.change_drp('contact_select1','');
      document.getElementById("contact_sent").innerHTML="<b>Message Sent</b>";
      $('#mydiv_contact').hide(); 

         /* }*/

    
  /*  }).catch(function(error) {
      
      console.log(error);
    });*/
}
   
  }

  vm.clear = function(){

    vm.username='';
    vm.password='';
    vm.passwordRepeat='';
    vm.eMail='';
    vm.error='';
    document.getElementById('id_contactUs').style.display='none';
    $location.path('/');
  }




}