(function() {
  angular
    .module('gDatingApp')
    .factory('SignupService', SignupService);

    SignupService.$inject = ['$http', '$window'];

    function SignupService ($http, $window) {

      return {
        createCurrentUser: function(user, token) {
          $window.localStorage.setItem('user', user);
          $window.localStorage.setItem('token', token);
        },
        signup: function(user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user).then( (data) => {
            token = data.data.data.token;
            user = data.data.data;
            this.createCurrentUser(user, token);
          });
        }
      }
    }

})();
