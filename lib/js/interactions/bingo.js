function Bingo($scope) {
	$scope.board = 25;

	$scope.test = "I'm not your savior babygirl";
	
	$scope.getNumber = function(num) {
		return new Array(num);
	}
	
	$scope.instruct = ["sad", "angry", "panic", "jealous", "desperate", "ashamed", "stupid", "embarassed", "guilty", "moody", "hungry", "crying", "hopeless", "tired", "pessimistic", "elated", "nervous", "worried", "paranoid", "worthless", "overwhelmed", "bored", "confrontational", "self-loathing", "dismissive", "blank"];

	$scope.pushList = function() {
		$scope.instruct.push($scope.test);
		$scope.test = "";
	}

	$scope.boardSort = [];

	$scope.generateBoard = function() {
		var cache = $scope.board;
		var cacheArray = $scope.instruct.slice(0);
		
		function random(number) {
			return Math.floor(Math.random() * number + 0);
		}
		
		for (var i = 0; i < $scope.board; i++) {
			var currentRandom = random(cache);
			console.log(cache + "!")
			console.log(currentRandom);
			
			var result;
			
			if ($scope.instruct.length > currentRandom) {
				result = cacheArray[currentRandom];
				cacheArray.splice(currentRandom, 1);	
			} else {
				result = "eee" + i;
			}
			$scope.boardSort.push(result);
			cache--;
		}
	}
}