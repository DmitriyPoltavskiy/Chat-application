angular.module("chatApp")
.directive("scrollTo", [function($anchorScroll, $location) {
	return {
		restrict: "A",
		link: function() {
			$(".chat-message").ready(function() {
				var pos = document.getElementById("scrollHeight").scrollHeight;
				$(".chat-body").scrollTo(pos);
			});
				// var elem = $(".chat-message:last-child");
				// console.log("elem: " + elem);
				// var pos = elem.scrollHeight;
				// var pos = elem.scrollTop();
				// console.log("pos: " + pos);
				// elem.css("color", "red");

				// elem.scrollIntoView(false);
				// $location.hash(pos);

				// $anchorScroll();
				// alert("Im working!");


				// var elem = $(".chat-message:last-child");
				// elem.addClass("scrollTo");
				// console.log("I am working");



				// $(".scrollTo").scrollToID({
				// 	speed: 1000, //expressed in Milliseconds
				// 	offset: 300   //in pixels
				// });


		}
	}
}]);