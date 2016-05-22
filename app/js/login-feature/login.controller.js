angular
  .module('gDatingApp')
  .controller('loginController', loginController);

  loginController.$inject = ['LoginService', '$state'];

  function loginController (LoginService, $state) {
    let vm = this;

    vm.login = function(user) {
      LoginService.login(user).then( ()=> {
        $state.go('members');
      }).catch( (err) => {
        console.log(err);
      })

    }
  }
