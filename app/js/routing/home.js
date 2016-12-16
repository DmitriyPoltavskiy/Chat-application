angular.module("chatApp.home", ["homeCtrl", "ngRoute"])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl: "home.html",
		controller: "homeCtrl"
	});
}]);