var $scope, $location;
var why = angular.module('why', []);

why.directive('syncFocusWith', function($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            focusValue: "=syncFocusWith"
        },
        link: function($scope, $element, attrs) {
            $scope.$watch("focusValue", function(currentValue, previousValue) {
                if (currentValue === true && !previousValue) {
                    $element[0].focus();
                } else if (currentValue === false && previousValue) {
                    $element[0].blur();
                }
            })
        }
    }
});
 
why.controller('whyControl', function($scope, $location, $anchorScroll) {
	$scope.feeling = "";
	$scope.first = "";
	$scope.second = "";
	$scope.third = "";
	$scope.fourth = "";
	$scope.fifth = "";
	$scope.analysis = "";
	$scope.start = true;
	
	$scope.focus = [false,false,false,false,false];
	
	$scope.simpleScroll = function(loc, focus) {
	    $location.hash(loc);
	    $anchorScroll();
		
		var scrollers = ['first', 'second', 'third', 'fourth', 'fifth', 'analysis']
		for (var i = 0; i < scrollers.length; i++) {
			if (loc === scrollers[i]) {
				$scope.focus[i] = true;
			} else if (loc === 'analysis') {
				$scope.analysis = true;
			}
		}
	}
	
	$scope.reset = function(top) {
		$scope.simpleScroll(top);
		$scope.feeling = "";
		$scope.first = "";
		$scope.second = "";
		$scope.third = "";
		$scope.fourth = "";
		$scope.fifth = "";
		$scope.analysis = "";
		$scope.focus = [false,false,false,false,false];
	}
})