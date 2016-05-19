(function() {

angular
  .module('gDatingApp')
  .controller('signUpController', signUpController);

  signUpController.$inject = ['SignupService', '$state'];

  function signUpController(SignupService, $state) {
    let vm = this;

    vm.signup = function(user) {
      SignupService.signup(user).then( (data) => {
        console.log(data);
      }).catch( (err) => {
        console.log(err);
      });
    }
  }
})();
