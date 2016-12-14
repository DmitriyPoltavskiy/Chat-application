function chatService($firebaseArray) {

	var messagesRef = firebase.database().ref().child("messages");
	var chat = {};

	// Создание синхронезированного массива
	chat.getMessages = function() {
		return $firebaseArray(messagesRef);
	}

	// Добавление полученного сообещения
	// из контроллера в синх. массив
	chat.sendMessage = function(message) {
		chat.getMessages().$add(message);
	}

	return chat;
}

angular.module("chatApp")
.factory("ChatServise", ["$firebaseArray", chatService])