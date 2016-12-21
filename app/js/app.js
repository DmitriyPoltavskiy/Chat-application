// Initialize Firebase
var config = {
	 apiKey: "AIzaSyCq4m6rjQA8NROOK-VT2IOUww8bv374gZg",
	 authDomain: "chatapp-2b28b.firebaseapp.com",
	 databaseURL: "https://chatapp-2b28b.firebaseio.com",
	 storageBucket: "chatapp-2b28b.appspot.com",
	 messagingSenderId: "577030966423"
};
// var config = {
//     apiKey: "AIzaSyBJ_1WgGn42OQq7V9QbIzMB2P5s_hAsMAM",
//     authDomain: "chat-cat-1818d.firebaseapp.com",
//     databaseURL: "https://chat-cat-1818d.firebaseio.com",
//     storageBucket: "chat-cat-1818d.appspot.com",
//     messagingSenderId: "385006392568"
//   };
firebase.initializeApp(config);

angular.module("chatApp", [
	"firebase",
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
		controller: "chatCtrl"
	});
}]);
