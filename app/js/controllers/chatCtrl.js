function chatCtrl() {
	var vm = this;

	vm.test = "some text";
}


angular.module('chatApp')
.controller("chatCtrl", [chatCtrl]);