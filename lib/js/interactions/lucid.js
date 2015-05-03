var $scope, $location;
var lucid = angular.module('lucid', []);


lucid.controller('editor', function($scope) {
	$scope.original = "";
	$scope.edited = "";
	$scope.limit = 0;

	$scope.lol = function() {
		$scope.limit = Math.floor($scope.original.length / 2);
	}

	$scope.copy = function(dir, toCopy) {
		if (dir == "posNeg") {
			$scope.edited = toCopy;
		} else {
			$scope.original = toCopy;
		}
	}
});

$(document).ready(function() {
	$("textarea").on("focus", function() {
		$(".original__length").removeClass("original__length--focus");
		$(this).siblings(".original__length").addClass("original__length--focus")
	});

	$(".half").height($(window).height());

	$(".lucid__header h1").click(function() {
		$(this).parent().css("top", "-20px");
		$(".circle-crop").css("top", "-20px");
	})
});
