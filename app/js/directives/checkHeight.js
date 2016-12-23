angular.module("chatApp")
.directive("checkHeight", function() {
	return {
		restrict: "A",
		link: function(scope, elements, attrs) {
			var elemH = elements.height();
			var winH = $(window).height();
			if(winH > elemH){
				elements.css("height", "100vh");
			}
		}
	}
});