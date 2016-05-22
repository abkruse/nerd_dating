(function() {
  angular
    .module('gDatingApp')
    .factory('LoginService', LoginService);

    LoginService.$inject = ['$http', '$window'];

    function LoginService ($http, $window) {

      return {
        createCurrentUser: function(user, token) {
          $window.localStorage.setItem('user', user);
          $window.localStorage.setItem('token', token);
        },

        login: function(user) {
          return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user).then( (data) => {
            user = JSON.stringify(data.data.data.user);
            token = data.data.data.token;
            this.createCurrentUser(user, token);
          })
        }
      }

    }
})();
