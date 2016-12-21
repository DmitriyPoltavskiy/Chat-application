function chatService($firebaseArray) {

	var messagesRef = firebase.database().ref().child("messages");
	// var usersRef = firebase.database().ref().child("user");
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

	chat.limitMessages = function() {
		return $firebaseArray(messagesRef.limitToLast(20));
	}

	return chat;
}

angular.module("chatApp")
.factory("ChatService", ["$firebaseArray", chatService])