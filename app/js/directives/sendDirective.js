function clickToSend() {
	return function(scope, elements, attrs) {

		// var enter = false;
		// var shift = true;

		// elements.keydown(function(event) {
		// 	// event.preventDefault();
		// 	if(event.which == 13) {
		// 		enter = true;
		// 		console.log("Yes enter");
		// 	}
		// });

		// elements.keydown(function(event) {
		// 	if(event.which == 16) {
		// 		shift = true;
		// 		console.log("Yes shift");
		// 	}
		// });

		elements.on('keydown', function(event){
			if (event.keyCode == 16) {
				$(document).on('keydown', function(event){
					if (event.keyCode == 13) {
						$(document).off('keydown');
						// shift = false;
						console.log("Yes shift + enter");
					}
				})
				.keyup(function(event){
					// shift = true;
				});
			}
			else if(event.keyCode == 13) {
				scope.$apply(function() {
					scope.$eval(attrs.sendDirective)
				});
				event.preventDefault();
			}
		});




		// if(event.which === 13) {
		// 	scope.$apply(function() {
		// 		scope.$eval(attrs.sendDirective)
		// 	});
		// }




		// elements.bind("keydown keypress", function(event) {
		// 	if(event.which === 13) {
		// 		scope.$apply(function() {
		// 			scope.$eval(attrs.sendDirective)
		// 		});
		// 		event.preventDefault();
		// 	}
		// });
	}
}

angular.module("chatApp")
.directive("sendDirective", [clickToSend])