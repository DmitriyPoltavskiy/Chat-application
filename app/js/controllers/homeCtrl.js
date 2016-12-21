angular.module("chatApp")
.controller("homeCtrl",  [
	"$scope", 
	"$firebaseAuth",
	"firebase",
	// "$location",
	function($scope, $firebaseAuth, firebase, $location) {

		$scope.SignIn = function() {
		
		var username = $scope.user.email;
		var password = $scope.user.password;
		
		console.log("username: " + username);
		console.log("password: " + password);

		firebase.User.displayName = "her";
		console.log(firebase.User.displayName);

		firebase.auth().signInWithEmailAndPassword(username, password)
		.then(function(result) {
			console.log("result: " + result);
			window.location.href = '/#!/chat';
			// $location.path("chat");

		})
		.catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
				alert('Wrong password.');
			}
			else {
				alert(errorMessage);
			}
			console.log(error);
		});
	}


}]);
