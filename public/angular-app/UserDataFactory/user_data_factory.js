angular.module('meanchat').factory('UserDataFactory', UserDataFactory);

function UserDataFactory($http) {
  return {
  	 GetUser:GetUser
     /*usercreds:usercreds*/

  };
  /*function usercreds() {
    return $http.get('/api/data').then(complete).catch(failed);
  }*/
  function GetUser(id) {
    return $http.get('/api/userdata/'+ id).then(complete).catch(failed);
  }

  
  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }
 }