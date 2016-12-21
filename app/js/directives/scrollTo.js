angular.module("chatApp")
.directive("scrollTo", function() {
	return {
		restrict: "A",
		link: function() {
			$(".chat-message").ready(function() {
				// console.log("scroll to!");
				var pos = document.getElementById("scrollHeight").scrollHeight;
				$(".chat-body").scrollTo(pos);
			});
		}
	}
});