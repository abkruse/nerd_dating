(function() {
  angular
    .module('gDatingApp')
    .filter('gender', function() {
      return function(input) {
        if(input === 1) {
          gender = 'male';
          return gender;
        } else if (input === 2) {
          gender = 'female';
          return gender;
        } else if (input === 0) {
          gender = '';
          return gender;
        } else if (input === 3) {
          gender = 'transgender'
        }
      }
    })
})();
