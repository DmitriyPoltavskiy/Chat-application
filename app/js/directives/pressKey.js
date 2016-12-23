angular.module("chatApp")
.directive("pressKey", function() {
	return {
		restrict: "A",
		link: function(scope, elements, attrs) {
			$(document).keydown(function() {
				elements.focus();
			});
		}
	}
});