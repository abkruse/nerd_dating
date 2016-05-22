(function () {
  'use strict';

  angular
    .module('gDatingApp')
    .controller('membersController', membersController);

    membersController.$inject = ['MembersService']

    function membersController(MembersService) {
      let vm = this;

      vm.getMemberInfo = function(id) {
        MembersService.getMemberInfo(id).then( (data)=> {
          vm.soloMember = data;
        }).catch( (err) => {
          console.log(err);
        })
      }

      vm.likeMember = function(id, member) {
        MembersService.likeMember(id, member).then( (data) => {

        }).catch( (err) => {
          console.log(err);
        })
      }
    }
})();
