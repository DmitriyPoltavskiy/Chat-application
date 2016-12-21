angular.module("chatApp")
.directive("checkHeight", function() {
	return {
		restrict: "A",
		link: function(scope, elements, attrs) {
			// $(".chat-message").
			var elemH = elements.height();
			var winH = $(window).height();
			// alert(elemH);
			// alert(winH);
			if(winH > elemH){
				elements.css("height", "100vh");
			}
		}
	}
});