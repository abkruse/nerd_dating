(function() {
  angular
    .module('gDatingApp')
    .factory('LoginService', LoginService);

    LoginService.$inject = ['$http'];

    function LoginService ($http, $window) {
      return {
        createCurrentUser: function(data) {
          $window.localStorage('user', data.data.data);
          $window.localStorage('token', data.data.token);
        },
        login: function(user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login').then( (data) => {
            this.createCurrentUser(data.data);
          })
        }
      }
    }
})();
