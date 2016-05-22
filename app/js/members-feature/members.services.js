(function() {
  'use strict';

  angular
    .module('gDatingApp')
    .factory('MembersService', MembersService);

    MembersService.$inject = ['$http', '$window'];

    function MembersService($http, $window) {
      const gApi = 'https://galvanize-student-apis.herokuapp.com/gdating/';

      return {
        getMembers: function() {
          return $http.get(gApi + 'members?limit=5').then( (data) => {
            return data.data.data;
          });
        },
        getMemberInfo: function(id) {
          return $http.get(gApi + 'members/' + id).then( (data) => {
            return data.data.data;
          })
        },
        likeMember: function(member, currentUser) {
          currentUser = JSON.parse("localStorage.getItem('user')");
          //have currentuser data
          //push id of like into interestedIn array
          //update currentUser in API (PUT)
          console.log(currentUser);
        }
      }
    }

})();
