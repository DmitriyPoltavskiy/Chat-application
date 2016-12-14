function clickToSend() {
	return function(scope, elements, attrs) {
		elements.bind("keydown keypress", function(event) {
			if(event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.sendDirective)
				});

				event.preventDefault();
			}
		});
	}
}

angular.module("chatApp")
.directive("sendDirective", [clickToSend])