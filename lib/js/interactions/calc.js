function Calculator($scope) {
	
	$scope.loaners = [];
	
	$scope.principal = 11500;
	$scope.monthsleft = 4;
	$scope.interest = 10;
	
	$scope.main = 0;
	$scope.side = 0;
	
	function constructLoaner(name, loan, interest) {
		this.name = name;
		this.loan = loan;
		this.interest = interest;
	}
	
	$scope.addNewLoaner = function() {
		$scope.loaners.push(new constructLoaner("Person", "0", "0"))
	}
	
	$scope.calculated = function() {
		return $scope.principal + "!!!";
	}
}