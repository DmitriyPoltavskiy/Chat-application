angular.module("chatApp")
.directive("isLogging", [
	"$firebaseAuth", 
	function($firebaseAuth) {
	return {
		restrict: "A",
		link: function() {
			var auth = $firebaseAuth();
			var userData;

			auth.$onAuthStateChanged(function(authData) {
				console.log("authData: " + authData);
				userData = authData;

				if (authData != null) {
					window.location.href = '/#!/chat';
				}
				else {
					window.location.href = '/#!/home';
				}
				console.log("is working!");
			});

		}
	}
}]);