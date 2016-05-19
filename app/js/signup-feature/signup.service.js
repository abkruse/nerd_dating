(function() {
  angular
    .module('gDatingApp')
    .factory('SignupService', SignupService);

    SignupService.$inject = ['$http', '$window'];

    function SignupService ($http, $window) {
      let self = this;

      return {
        signup: function(user) {
          return $http.post('http://galvanize-student-apis.herokuapp.com/gdating/auth/register', user).then( (data) => {
            self.createCurrentUser(data.data);
          });
        },
        createCurrentUser: function(data) {
          $window.localStorage.setItem('user', data.data);
          $window.localStorage.setItem('token', data.token);
        }
      }
    }

})();
