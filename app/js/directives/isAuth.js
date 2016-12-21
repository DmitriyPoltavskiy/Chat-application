angular.module("chatApp")
.directive("isAuth", [
	"$firebaseAuth", 
	function($firebaseAuth) {
	return {
		restrict: "A",
		link: function() {
			var auth = $firebaseAuth();
			var userData;

			auth.$onAuthStateChanged(function(authData) {
				userData = authData;

				if (authData != null) {
					window.location.href = '/#!/chat';
				}
				else {
					window.location.href = '/#!/home';
				}
			});

		}
	}
}]);