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
		console.log($scope.loaners.length)
		$scope.loaners.push(new constructLoaner("Person", 0, 0));
	}
	
	function calcHourly(salary) {
		return (salary * $scope.monthsleft * 160);
	}
	
	$scope.calculated = function() {
		
		var list = $scope.loaners;
		var loans = 0;
		for (var i = 0; i < list.length; i++) {
			loans += parseInt(list[i].loan) + parseInt(list[i].interest);
		}
		return $scope.principal - calcHourly($scope.main) - calcHourly($scope.side) - loans;
	}
}