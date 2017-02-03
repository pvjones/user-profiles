angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			if (response.data.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	}

  $scope.changeCreds = function( creds ) {
    friendService.changeCreds(creds).then(function(response) {
      if (response.data.updated) {
        alert('credentials updated')
      } else {
        alert('sorry, there was a problem')
      }

    })
  }

});