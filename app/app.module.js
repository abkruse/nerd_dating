(function() {

  angular
    .module('gDatingApp', ['ui.router'])
    .config(config)
    .service('AuthInterceptor', AuthInterceptor);
    // .run(run);

    config.$inject = ['$stateProvider', '$locationProvider', '$httpProvider'];

    function config($stateProvider, $locationProvider, $httpProvider) {
      $stateProvider
        .state('index', {
          url:'/',
          templateUrl: './app/views/index.html',
          controller: 'homeController',
          controllerAs: 'Home'
        })
        .state('signup', {
          url:'/signup',
          templateUrl: './app/views/signup.html',
          controller: 'signUpController',
          controllerAs: 'SignUp'
        })
        .state('login', {
          url: '/login',
          templateUrl: './app/views/login.html',
          controller: 'loginController',
          controllerAs: 'Login'
        })
        .state('members', {
          url: '/members',
          templateUrl: './app/views/members.html',
          controller: 'membersController',
          controllerAs: 'Members',
          resolve: {
            getMembers: function(MembersService) {
               return MembersService.getMembers()
            }
          }
        });
        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push('AuthInterceptor');
    }

    function AuthInterceptor ($window, $location, $q) {
      return {
        request: function(config) {
          config.headers['X-Requested-With'] = 'XMLHttpRequest';
          var token = $window.localStorage.getItem('token');
          if(token) {
            config.headers.Authorization = 'Bearer ' + token;
          }
          return $q.resolve(config);
        },
        responseError: function(err) {
          if(err.data === 'invalid token' || err.data === 'invalid signature' || err.data === 'jwt malformed') {
            $location.path('/logout');
            return $q.reject(err);
          }
          if(err.status === 401) {
            $location.path('/users');
            return $q.reject(err);
          }
          return $q.reject(err);
        }
      }
    }

    // function run($rootScope, $location, $window, UserService) {
    //   $rootScope.$on('$routeChangeStart', function (event, next, current) {
    //
    //     if (next.restricted && !$window.localStorage.getItem("token")) {
    //       if(current && current.signup)
    //         $location.path('/signup');
    //       else
    //         $location.path('/login');
    //     }
    //
    //     if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
    //       $location.path('/users');
    //     }
    //   };
})();
