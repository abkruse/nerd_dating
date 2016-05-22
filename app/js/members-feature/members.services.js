(function() {
  'use strict';

  angular
    .module('gDatingApp')
    .factory('MembersService', MembersService);

    MembersService.$inject = ['$http', '$q'];

    function MembersService($http, $q) {
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
        likeMember: function(member) {
          return $q(function(resolve, reject) {
            const currentUser = JSON.parse(localStorage.user);
            const userId = currentUser._id;
            const match = {
              '_match' : member._id
            };

            $http.post(gApi + 'members/' + userId + '/matches', match).success((data) => {
              resolve(data);
            }).error( (error) => {
              reject(error)
            });
          });
        }
      }
    }

})();
