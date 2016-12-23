angular.module("chatApp")
.directive("emptyTextarea", [
	"chatCtrl", 
	function() {
	return {
		restrict: "A",
		link: function(scope, elements, attrs) {
			$(".chat-footer .button").click(function() {
				// console.log("'" + elements.text() + "'");
				if (chatCtrl.newMessage != "") {
					alert("work");
					$(".chat-footer-message").removeClass("absentText");
				}
				else {
					$(".chat-footer-message").focus();
					$(".chat-footer-message").addClass("absentText");
				}
			})
		}
	}
}]);