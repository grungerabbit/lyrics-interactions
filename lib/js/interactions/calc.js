function Calculator($scope) {
	
	$scope.loaners = [];
	
	$scope.principal = 11500;
	$scope.monthsleft = 4;
	
	function constructLoaner(name, income1, income2) {
		this.name = name;
		this.main = income1;
		this.side = income2;
	}
	
	$scope.addNewLoaner = function() {
		//$scope.
	}
}