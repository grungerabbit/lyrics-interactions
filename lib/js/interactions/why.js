var $scope, $location;
var why = angular.module('why', []);


why.controller('whyControl', function($scope, $location, $anchorScroll) {
	$scope.feeling = "";
	$scope.first = "";
	$scope.second = "";
	$scope.third = "";
	$scope.fourth = "";
	$scope.fifth = "";
	
	$scope.why = "";
	
	$scope.analysis = "";
	
	$scope.finish = function() {
		$scope.analysis = $scope.fifth ? true : false;
	}
	
	$scope.simpleScroll = function(loc) {
	    $location.hash(loc);
	    $anchorScroll();
		
		if (loc === 'analysis') {
			$scope.analysis = true;
		}
	}
})