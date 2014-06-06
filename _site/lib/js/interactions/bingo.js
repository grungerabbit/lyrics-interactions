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

	$scope.boardSort = [];

	$scope.generateBoard = function() {
		var cache = $scope.board;
		var cacheArray = $scope.array.slice(0);
		
		function random(number) {
			return Math.floor(Math.random() * number + 0);
		}
		
		for (var i = 0; i < $scope.board; i++) {
			var currentRandom = random(cache);
			console.log(currentRandom);
			
			var result;
			
			if ($scope.array.length > currentRandom) {
				result = cacheArray[currentRandom];
				cacheArray.splice(currentRandom, 1);	
			} else {
				result = "eee" + i;
			}
			$scope.boardSort.push(result);
		}
	}
}