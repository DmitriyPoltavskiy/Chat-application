function chatCtrl(ChatService, $firebaseAuth) {
	var vm = this;
	var auth = $firebaseAuth();

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

	vm.login = function() {
		auth.$signInWithPopup("google");
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