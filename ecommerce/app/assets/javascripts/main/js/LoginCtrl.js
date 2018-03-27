function LoginCtrl($scope, $location) {
	console.log("New Login Ctrl")
	$scope.submit = function() {
		var username = $scope.username;
		var password = $scope.password;
		console.log(username)
		console.log(password)
		if(username == 'user' && password == 'user') {
			$location.path('/home');
		} else {
			alert('User not registred');
		}
	}
}


angular
	.module('app')
	.controller("LoginCtrl", LoginCtrl);
