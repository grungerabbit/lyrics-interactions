var $scope, $location;
var reframe = angular.module('reframe', []);


reframe.controller('editor', function($scope) {
	$scope.chapel = "on the hill";
	
	$scope.wanted = "";
	$scope.why = "";
	
	$scope.affected = [];
	
	var Person = function(name) {
		this.name = name;
		this.wish = "";
	}
	
	$scope.addAffected = function () {
		if ($scope.namePerson.length > 0) {
			$scope.affected.push(new Person($scope.namePerson));
			$scope.namePerson = "";
		}
	}
	
	
	
});