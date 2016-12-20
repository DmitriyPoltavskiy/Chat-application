angular.module("chatApp")
.directive("pressKey", function() {
	return {
		restrict: "A",
		link: function() {
			$(document).keydown(function() {
				$(".chat-footer-message").focus();
			});
		}
	}
});