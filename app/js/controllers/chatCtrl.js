function chatCtrl(ChatService) {
	var vm = this;

	// Получаем сообщения с сервера
	vm.messages = ChatService.getMessages();

	vm.shownMessages = ChatService.limitMessages();

	// Берем из textarea текст сообщения 
	vm.sendMessage = function() {
		var message = {
			text: vm.newMessage
		}

		if (vm.newMessage != "") {
			ChatService.sendMessage(message); // Вызываем метод сервиса
			vm.newMessage = ""; // Очищаем textarea после отправки
		}
		else {
			$(".chat-footer-message").focus();
		}
	}
}


angular.module("chatApp")
.controller("chatCtrl", ["ChatService", chatCtrl]);