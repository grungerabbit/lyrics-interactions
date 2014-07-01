function Why($scope) {
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
}