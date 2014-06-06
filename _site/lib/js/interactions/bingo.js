function Bingo($scope) {
	$scope.board = 25;

	$scope.test = "I'm not your savior babygirl";
	
	$scope.getNumber = function(num) {
		return new Array(num);
	}
	
	$scope.array = ["a", "b", "c"];

	$scope.pushList = function() {
		$scope.array.push($scope.test);
		$scope.test = "";
	}


}