var $scope, $location;
var reframe = angular.module('reframe', []);


reframe.controller('editor', function($scope) {
	$scope.chapel = "on the hill";
	
	$scope.wanted = "";
	
	$scope.affected = [];
	
	$scope.addAffected = function () {
		if ($scope.namePerson.length > 0) {
			$scope.affected.push($scope.namePerson);
			$scope.namePerson = "";
		}
	}
	
	
	
});