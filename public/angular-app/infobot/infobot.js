angular.module('meanhotel').controller('infocontroller', infocontroller);

function infocontroller($http, $scope, $location, $window, UserDataFactory) {
  var vm = this;
  $scope.test = false;

  vm.personal = function() {

  	/*UserDataFactory.usercreds().then(function(response) {
    // console.log(response);
    var username = response.data.username;
    var password = response.data.password;

  });*/
/*var username = satish@intellisofttech.com;
    var password = d@tam0rphix@123;
    var token = jwt.sign({ username: user.username}, 's3cr3t', { expiresIn: 3600 });*/
    var $popup=$window.open("https://www.ibmwatsonconversation.com/us-south/a1400cf5-cf1d-4635-a934-de5676be33d5/login?username=satish@intellisofttech.com&password=d@tam0rphix@123", "popup","_blank", ",toolbar=no,location=no,directories=no,status=no,menub ar=no,scrollbar=no,resizable=no,copyhistory=yes,width=600,height=400,status=yes, toolbar=no, menubar=no, location=no, addressbar=no, left=10,top=150");
    
    //var $popup=$window.open("https://www.ibmwatsonconversation.com/us-south/a1400cf5-cf1d-4635-a934-de5676be33d5/workspaces?bluemixSignInButton=vm.login()&username=satish%40intellisofttech.com&password=d%40tam0rphix%40123", "popup", "width=800,height=600,left=100,top=150");
    

    //var $popup=$window.open("https://idaas.iam.ibm.com/idaas/mtfim/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:basicldapuser?username=satish%40intellisofttech.com&password=d@tam0rphix%40123", "popup", "width=600,height=400,left=10,top=150");
    

    
  	
  	/*$popup.username=satish@intellisofttech.com;
  	$popup.password=d@tam0rphix@123;*/




  	/*var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({*/
/*	var watson = require('watson-developer-cloud');

	var conversation = watson.conversation({
  username: '1bc385e0-bcf0-482a-a983-fcb8601fc579', // replace with username from service key
  password: 'kSuwvpt4Nxlt', // replace with password from service key
  path: { workspace_id: 'a0659d95-e06d-49ac-88c6-377738d09aee' }, // replace with workspace ID
  version_date: '2016-07-11'
});
var context = {};

conversation.message({
  workspace_id: '25dfa8a0-0263-471b-8980-317e68c30488',
  /*input: {'text': 'Turn on the lights'},
  context: context
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});*/

$scope.test = true;

  }
  /*vm.add = function() {
    var f = document.getElementById('file').files[0],
        r = new FileReader();
     console.log(f);
    r.onloadend = function(e) {
      var data = e.target.result;
      console.log(data);
      //send your binary data via $http or $resource or do anything else with it
    }

    r.readAsBinaryString(f);
}*/


$scope.fileContent = '';
    $scope.fileSize = 0;
    $scope.fileName = '';
    $scope.submit = function () {
      var file = document.getElementById("myFileInput").files[0];
      var content;
      
      if (file) {
        var aReader = new FileReader();
        aReader.readAsText(file, "UTF-8");
        aReader.onload = function (evt) {
            content= aReader.result;
            $scope.fileContent = content; 
            $scope.fileName = document.getElementById("myFileInput").files[0].name;
            $scope.fileSize = document.getElementById("myFileInput").files[0].size;
            var user = {
      personal_banking: content
    };
            $http.post('/api/users/json', user).then(function(result) {
        console.log(result);
        console.log("done");
        vm.message = 'Successfully Uploaded...Please Go and Select Type Of Bot Service You Need in Bot Store....!!!';
        vm.error = '';
        //$location.path('/store');
      }).catch(function(error) {
      console.log(error);
    
    });
        };
        aReader.onerror = function (evt) {
            $scope.fileContent = "error";
        };
      }
      //console.log(content);
      
    //console.log(personal_banking);
      


    }

}
