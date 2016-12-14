function chatCtrl(ChatServise) {
	var vm = this;

	vm.sendMessage = function() {
		var message = {
			text: vm.newMessage
		}
		ChatService.sendMessage(message);
	}
}


angular.module("chatApp")
.controller("chatCtrl", ["ChatService", chatCtrl]);