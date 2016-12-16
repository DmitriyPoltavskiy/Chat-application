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
	});
}])

.controller("homeCtrl",  [
	"$scope", 
	"$firebaseAuth",
	function($scope, $firebaseAuth) {

	// var vm = this;
	
	$scope.SignIn = function(e) {
	e.preventDefault(); // предотвращаем перезагрузку страницы
	
	var username = $scope.user.email;
	var password = $scope.user.password;
	
	console.log("username: " + username);
	console.log("password: " + password);

	var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
	var loginObj = $firebaseAuth(firebaseObj);

	loginObj.$authWithPassword({
		email: username,
		password: password
	})
	.then(function(user) {
		//Success callback
		console.log('Authentication successful');
	}, function(error) {
		//Failure callback
		console.log('Authentication failure');
	});

}}]);

// app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
//   function($scope, $firebaseAuth) {
//     var auth = $firebaseAuth();

//     $scope.signIn = function() {
//       $scope.firebaseUser = null;
//       $scope.error = null;

//       auth.$signInAnonymously().then(function(firebaseUser) {
//         $scope.firebaseUser = firebaseUser;
//       }).catch(function(error) {
//         $scope.error = error;
//       });
//     };
//   }
// ]);