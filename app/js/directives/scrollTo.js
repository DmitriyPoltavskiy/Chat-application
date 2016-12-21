angular.module("chatApp")
.directive("scrollTo", function() {
	return {
		restrict: "A",
		link: function() {
			$(".chat-message").ready(function() {
				var pos = document.getElementById("scrollHeight").scrollHeight;
				$(".chat-body").scrollTo(pos);
			});
		}
	}
});