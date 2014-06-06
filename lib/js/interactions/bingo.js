function Bingo($scope) {
	$scope.board = 25;

	$scope.test = "";
	
	$scope.getNumber = function(num) {
		return new Array(num);
	}
	
	$scope.instruct = ["sad", "angry", "panic", "jealous", "desperate", "ashamed", "stupid", "embarassed", "guilty", "moody", "hungry", "crying", "hopeless", "tired", "pessimistic", "elated", "nervous", "worried", "paranoid", "worthless", "overwhelmed", "bored", "confrontational", "self-loathing", "dismissive"];

	$scope.pushList = function() {
		$scope.instruct.push($scope.test);
		$scope.test = "";
	}

	$scope.boardSort = [];

	$scope.generateBoard = function() {
		
		
		var cache = $scope.board > $scope.instruct.length ? $scope.board : $scope.instruct.length;
		var cacheArray = $scope.instruct.slice(0);
		
		if ($scope.boardSort.length >= cache) {
			$scope.boardSort.length = 0;
		}
		
		function random(number) {
			return Math.floor(Math.random() * number + 0);
		}
		
		for (var i = 0; i < $scope.board; i++) {
			var currentRandom = random(cache);
			var result;
			
			if ($scope.instruct.length > currentRandom) {
				result = cacheArray[currentRandom];
				cacheArray.splice(currentRandom, 1);	
			} else {
				result = "Free";
			}
			$scope.boardSort.push({'text' : result, 'selected' : false});
			cache--;
		}
	}
	
	$scope.highlightedBoard = [];
	
	$scope.highlightSpace = function() {	
		var thisSquare = $scope.boardSort[this.$index];
		
		if (thisSquare == undefined) {
			return;
		}
		
		thisSquare.selected = thisSquare.selected === false ? true : false;
		$scope.highlightedBoard.push(this.$index);
		
		console.log(this.$index);
	}
}