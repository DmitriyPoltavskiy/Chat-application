// Initialize Firebase
var config = {
	 apiKey: "AIzaSyCq4m6rjQA8NROOK-VT2IOUww8bv374gZg",
	 authDomain: "chatapp-2b28b.firebaseapp.com",
	 databaseURL: "https://chatapp-2b28b.firebaseio.com",
	 storageBucket: "chatapp-2b28b.appspot.com",
	 messagingSenderId: "577030966423"
};
firebase.initializeApp(config);

angular.module("chatApp", [
	"firebase",
	// "chatApp.home",
	"ngRoute"
])

.config(["$routeProvider", function($routeProvider) {
	// назначаем представление по умолчанию
	$routeProvider
	.otherwise({
			redirectTo: "/home"
	})
	.when("/home", {
		templateUrl: "home.html",
		controller: "homeCtrl"
	})
	.when("/chat", {
		templateUrl: "chat.html",
		// template: "<h1>Hi!</h1>",
		controller: "chatCtrl"
	});
}]);
