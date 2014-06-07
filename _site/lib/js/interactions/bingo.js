function Bingo($scope) {
	$scope.board = 25;

	$scope.test = "";
	
	$scope.getNumber = function(num) {
		return new Array(num);
	}
	
	$scope.instruct = [{"feeling" : "sad"}, {"feeling" : "angry"}, {"feeling" : "panic"}, {"feeling" : "jealous"}, {"feeling" : "desperate"}, {"feeling" : "ashamed"}, {"feeling" : "stupid"}, {"feeling" : "embarassed"}, {"feeling" : "guilty"}, {"feeling" : "moody"}, {"feeling" : "hungry"}, {"feeling" : "crying"}, {"feeling" : "hopeless"}, {"feeling" : "tired"}, {"feeling" : "pessimistic"}, {"feeling" : "elated"}, {"feeling" : "nervous"}, {"feeling" : "worried"}, {"feeling" : "paranoid"}, {"feeling" : "worthless"}, {"feeling" : "overwhelmed"}, {"feeling" : "bored"}, {"feeling" : "confrontational"}, {"feeling" : "self-loathing"}, {"feeling" : "dismissive"}];

	$scope.pushList = function() {
		$scope.instruct.unshift({"feeling": $scope.test});
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
			
			if (cacheArray.length > currentRandom) {
				result = cacheArray[currentRandom].feeling;
				cacheArray.splice(currentRandom, 1);
				cache--;	
			} else {
				result = "Free Space";
			}
			$scope.boardSort.push({'text' : result, 'selected' : false});
		}
	}
	
	$scope.resetChoices = function() {
		$scope.instruct.length = 0;
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