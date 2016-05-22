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
        });
      }

      vm.likeMember = function(member) {
        MembersService.likeMember(member).then( (data) =>{
          return data;
        }).catch( (err) => {
          console.log(err);
        })
      }
    }
})();
