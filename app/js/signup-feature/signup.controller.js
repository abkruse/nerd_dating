(function() {

angular
  .module('gDatingApp')
  .controller('signUpController', signUpController);

  signUpController.$inject = ['SignupService', '$state'];

  function signUpController(SignupService, $state) {
    let vm = this;

    vm.signup = function(user) {
      SignupService.signup(user).then( (data) => {
        $state.go('index');
      }).catch( (err) => {
        console.log(err);
      });
    }
  }
})();
