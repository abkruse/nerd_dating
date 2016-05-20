(function() {
  angular
    .module('gDatingApp')
    .factory('SignupService', SignupService);

    SignupService.$inject = ['$http', '$window'];

    function SignupService ($http, $window) {

      return {
        createCurrentUser: function(data) {
          $window.localStorage.setItem('user', data.data.data);
          $window.localStorage.setItem('token', data.data.token);
        },
        signup: function(user) {
          return $http.post('http://galvanize-student-apis.herokuapp.com/gdating/auth/register', user).then( (data) => {
            this.createCurrentUser(data.data);
          });
        }
      }
    }

})();
