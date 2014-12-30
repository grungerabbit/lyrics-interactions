var $scope, $location;
var lucid = angular.module('lucid', []);


lucid.controller('editor', function($scope) {
	$scope.original = "";
	
	$scope.edited = "";
	$scope.over = false;

	$scope.isOver = function() {
		if ($scope.edited.length > Math.floor($scope.original.length / 2)) {
			$scope.over = true;
		} 
		$scope.over = false;
	}


});