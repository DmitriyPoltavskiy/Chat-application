function chatCtrl(ChatService, $firebaseAuth) {
	var vm = this;
	var auth = $firebaseAuth();
	var providerF = new firebase.auth.FacebookAuthProvider();
	var providerT = new firebase.auth.TwitterAuthProvider();
	// var providerG = new firebase.auth.GithubAuthProvider();
	var providerG = new firebase.auth.GithubAuthProvider();

	// Получаем сообщения с сервера
	vm.messages = ChatService.getMessages();

	vm.shownMessages = ChatService.limitMessages();

	// Берем из textarea текст сообщения 
	vm.sendMessage = function() {
		if(vm.author != null)
		{
			var message = {
				authorMessage: vm.author.displayName,
				authorId: vm.author.uid,
				authorPhoto: vm.author.photoURL,
				text: vm.newMessage
				// time: new Date().getTime()
			}

			if (vm.newMessage != "") {
				ChatService.sendMessage(message); // Вызываем метод сервиса
				vm.newMessage = ""; // Очищаем textarea после отправки
				
				$(".chat-footer-message").removeClass("absentText");
			}
			else {
				$(".chat-footer-message").focus();
				$(".chat-footer-message").addClass("absentText");
			}
		}
		else {
			alert("You are not login!");
		}
	}

	vm.deleteMessage = function() {
		ChatService.deleteMessage();
	}

	vm.login = function() {
		auth.$signInWithPopup("google");
	}

	vm.loginF = function() {
		auth.$signInWithPopup(providerF);
	}

	vm.loginT = function() {
		auth.$signInWithPopup(providerT);
	}

	vm.loginG = function() {
		auth.$signInWithPopup(providerG).then(function(result) {
		  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
		  var token = result.credential.accessToken;
		  console.log("token: " + token);
		  // The signed-in user info.
		  var user = result.user;
		  console.log("user: " + user);
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  console.log("errorCode: " + errorCode);
		  var errorMessage = error.message;
		  console.log("errorMessage: " + errorMessage);
		  // The email of the user's account used.
		  var email = error.email;
		  console.log("email: " + email);
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  console.log("credential: " + credential);
		  // ...
		});
	}

	vm.logout = function() {
		auth.$signOut();
	}

	auth.$onAuthStateChanged(function(authData) {
		console.log(authData);
		vm.author = authData;
	});

}


angular.module("chatApp")
.controller("chatCtrl", ["ChatService", "$firebaseAuth", chatCtrl]);