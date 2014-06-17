function Calculator($scope) {
	
	$scope.loaners = [];
	
	$scope.principal = 11500;
	$scope.monthsleft = 4;
	$scope.interest = 10;
	
	$scope.main = 0;
	$scope.side = 0;
	$scope.hoursWk = 40;
	$scope.shoursWk = 1;
	
	function constructLoaner(name, loan, interest) {
		this.name = name;
		this.loan = loan;
		this.interest = interest;
	}
	
	$scope.addNewLoaner = function() {
		console.log($scope.loaners.length)
		$scope.loaners.push(new constructLoaner("Person", 0, 10));
	}
	
	$scope.calcHourly = function(salary) {
		return (salary * $scope.monthsleft * $scope.hoursWk * 4) / 2;
	}
	
	$scope.calculated = function() {
		
		var list = $scope.loaners;
		var loans = 0;
		for (var i = 0; i < list.length; i++) {
			loans += parseInt(list[i].loan);
		}
		return $scope.principal - $scope.calcHourly($scope.main) - $scope.calcHourly($scope.side) - loans;
	}
	
	$scope.debt = function() {
		var debt = 0;
		var list = $scope.loaners;
		for (var j = 0; j < list.length; j++) {
			debt += parseInt(list[j].loan) * $scope.percentage(j);
		}
		return debt.toFixed(2);
	}
	
	$scope.percentage = function(index) {
		return parseInt($scope.loaners[index].interest) / 100 + 1;
	}
}